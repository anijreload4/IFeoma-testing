import { motion } from 'framer-motion';

export default function FriendsIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mb-12"
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
        <h2 className="text-3xl font-cursive text-gold text-center mb-4">
          A Circle of Love and Support
        </h2>
        <p className="text-white/90 text-center mb-6 leading-relaxed">
          In the garden of life, friends are the beautiful flowers that bloom in all seasons. 
          They are the ones who walk beside us, share our joys, lift us in challenges, and 
          make our journey meaningful. Through every season, we touch their lives as they 
          touch ours, creating a tapestry of shared memories and lasting bonds.
        </p>
        <blockquote className="text-gold/90 text-center italic">
          "A friend loves at all times, and a brother is born for a time of adversity."
          <span className="block text-sm mt-2">- Proverbs 17:17</span>
        </blockquote>
      </div>
    </motion.div>
  );
}