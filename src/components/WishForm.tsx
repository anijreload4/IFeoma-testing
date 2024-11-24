import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from '@phosphor-icons/react';

export default function WishForm() {
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    message: '',
    image: null as File | null
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image: null });
    setPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', relationship: '', message: '', image: null });
    setPreview(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mb-12"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
        <h2 className="text-3xl font-cursive text-gold text-center mb-6">
          Send Your Wishes & Prayers
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-coral"
              required
            />
          </div>

          <div>
            <label htmlFor="relationship" className="block text-white mb-2">
              Relationship to Celebrant
            </label>
            <input
              type="text"
              id="relationship"
              value={formData.relationship}
              onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-coral"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Your Message/Prayer
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-coral h-32"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Add a Photo (Optional)
            </label>
            <div className="relative">
              {preview ? (
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 rounded-full bg-red-500/80 text-white hover:bg-red-500"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-coral transition-colors">
                  <Upload size={32} className="text-white/80 mb-2" />
                  <span className="text-white/80">Click to upload a photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-coral/80 hover:bg-coral text-white rounded-lg transition-colors"
          >
            Send Your Wishes
          </button>
        </form>
      </div>
    </motion.div>
  );
}