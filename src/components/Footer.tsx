import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full py-6 mt-12 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-4"></div>
          <p className="text-gold font-cursive text-lg md:text-xl text-center">
            Ifeoma's Garden of Memories
          </p>
          <p className="text-gold/80 text-sm mt-1">
            © 2024 • A Celebration of Love
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-4"></div>
        </div>
      </div>
    </motion.footer>
  );
}