import { motion } from 'framer-motion';

export default function VideoFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto mb-12"
    >
      <div className="relative pt-[56.25%] bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
        <iframe
          src="https://drive.google.com/file/d/YOUR_VIDEO_ID/preview"
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}