import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoginForm() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (pin === '4025') {
      // Set cookie and redirect
      document.cookie = 'auth=4025; path=/';
      window.location.href = '/garden';
    } else {
      setError('Invalid PIN');
      setPin('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md p-8 rounded-lg bg-white/10 backdrop-blur-md"
    >
      <h2 className="text-3xl font-cursive text-center text-white mb-6">
        Welcome to Ifeoma's Garden
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="pin" className="block text-white mb-2">
            Enter PIN
          </label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => {
              setError('');
              setPin(e.target.value);
            }}
            maxLength={4}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-coral"
            required
          />
        </div>

        {error && (
          <p className="text-coral text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-coral/80 hover:bg-coral text-white rounded-lg transition-colors"
        >
          Enter Garden
        </button>
      </form>
    </motion.div>
  );
}