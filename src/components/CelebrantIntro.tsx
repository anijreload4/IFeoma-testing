import { motion } from 'framer-motion';

export default function CelebrantIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto mb-12"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-coral to-gold opacity-20 blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-[30px] border border-white/20">
          <h2 className="text-3xl md:text-4xl font-cursive text-white mb-4 text-center">
            Ifeoma Oluwafunmilayo Umeanor
          </h2>
          <p className="text-white/90 text-center mb-6 leading-relaxed">
            We join the host of heaven to celebrate your amazing journey of grace, 
            wisdom, and boundless love. Your life radiates God's goodness and your 
            heart touches everyone around you with kindness and joy. Today, we honor 
            the beautiful soul that you are.
          </p>
          <div className="text-center">
            <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-gold">
              November 25th, 2024
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}