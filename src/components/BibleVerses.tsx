import { motion } from 'framer-motion';

export default function BibleVerses() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-8"
    >
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
        <p className="text-white/90 italic text-lg mb-2">
          "So teach us to number our days, That we may cultivate and bring to You a heart of wisdom."
        </p>
        <p className="text-gold text-right">- Psalm 90:12 (AMP)</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
        <p className="text-white/90 italic text-lg mb-2">
          "Oh give thanks to the Lord, for He is good; For His lovingkindness (graciousness, mercy, compassion) endures forever!"
        </p>
        <p className="text-gold text-right">- Psalm 118:1 (AMP)</p>
      </div>
    </motion.div>
  );
}