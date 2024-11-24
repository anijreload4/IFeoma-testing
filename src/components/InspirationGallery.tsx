import { motion } from 'framer-motion';

const bibleVerses = [
  {
    verse: "A friend loves at all times, and a brother is born for a time of adversity.",
    reference: "Proverbs 17:17"
  },
  {
    verse: "Greater love has no one than this: to lay down one's life for one's friends.",
    reference: "John 15:13"
  },
  {
    verse: "As iron sharpens iron, so one person sharpens another.",
    reference: "Proverbs 27:17"
  },
  {
    verse: "Two are better than one, because they have a good return for their labor.",
    reference: "Ecclesiastes 4:9"
  },
  {
    verse: "Therefore encourage one another and build each other up, just as in fact you are doing.",
    reference: "1 Thessalonians 5:11"
  },
  {
    verse: "Be completely humble and gentle; be patient, bearing with one another in love.",
    reference: "Ephesians 4:2"
  },
  {
    verse: "Above all, love each other deeply, because love covers over a multitude of sins.",
    reference: "1 Peter 4:8"
  },
  {
    verse: "Dear friends, let us love one another, for love comes from God.",
    reference: "1 John 4:7"
  },
  {
    verse: "How good and pleasant it is when God's people live together in unity!",
    reference: "Psalm 133:1"
  },
  {
    verse: "Carry each other's burdens, and in this way you will fulfill the law of Christ.",
    reference: "Galatians 6:2"
  }
];

const friendshipQuotes = [
  {
    quote: "A sweet friendship refreshes the soul.",
    author: "Proverbs 27:9"
  },
  {
    quote: "True friends are like diamonds – bright, beautiful, valuable, and always in style.",
    author: "Nicole Richie"
  },
  {
    quote: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    author: "C.S. Lewis"
  },
  {
    quote: "A real friend is one who walks in when the rest of the world walks out.",
    author: "Walter Winchell"
  },
  {
    quote: "Friends are the family we choose for ourselves.",
    author: "Edna Buchanan"
  },
  {
    quote: "The greatest gift of life is friendship, and I have received it.",
    author: "Hubert H. Humphrey"
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard"
  },
  {
    quote: "Friendship is the only cement that will ever hold the world together.",
    author: "Woodrow Wilson"
  },
  {
    quote: "True friendship multiplies the good in life and divides its evils.",
    author: "Baltasar Gracian"
  },
  {
    quote: "Friends show their love in times of trouble, not in happiness.",
    author: "Euripides"
  }
];

export default function InspirationGallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-cursive text-center text-gold mb-8">
          Biblical Wisdom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bibleVerses.map((verse, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
            >
              <p className="text-white/90 italic mb-4">{verse.verse}</p>
              <p className="text-gold text-right">- {verse.reference}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-cursive text-center text-gold mb-8">
          Friendship Quotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friendshipQuotes.map((quote, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
            >
              <p className="text-white/90 italic mb-4">{quote.quote}</p>
              <p className="text-gold text-right">- {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}