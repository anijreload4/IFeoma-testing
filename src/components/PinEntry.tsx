import { motion } from 'framer-motion';

export default function PinEntry() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-8 rounded-lg bg-white/10 backdrop-blur-md"
    >
      <h2 className="text-3xl font-cursive text-center text-white mb-6">
        Welcome to Ifeoma's Garden
      </h2>
    </motion.div>
  );
}