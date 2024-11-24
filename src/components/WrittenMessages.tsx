import { motion } from 'framer-motion';

const messages = [
  {
    name: 'Chuks',
    photo: '/assets/friends/chuks.jpg',
    message: `Happy birthday to the most incredible sister i could ever ask for!
Today, we celebrate you—your strength, your kindness, firmness, and the light you bring to everyone around you. But I also want to take a moment to say, 'thank you' for being an amazing pillar of strength.  
When everything seemed to crumble and the world felt like chaos, you were my anchor. Your unwavering support, endless encouragement, and shoulder to cry on meant more to me than words can ever express. You didn't just stand by me—you lifted me up, dusted me off, and reminded me of my strength.  
So, today is all about you. I hope this year brings you as much joy, love, and comfort as you've given me. You deserve the absolute best, and I'm so grateful to call you my sister.  
Here's to you, to all the adventures we've shared, and to the countless memories yet to be made. I love you endlessly! 
With all my heart,`
  },
  {
    name: 'Osita',
    photo: '/assets/friends/osita.jpg',
    message: `Happy Birthday To An Amiable Friend. 
Where do I start from? I've got loads of prayers and wishes for you. 
- May your day be filled with love, laughter, and joy that overflows.
- You are a shining star and may your birthday be a reminder of your worth and the impact you have on others.
- May this New Year bring you closer to your dreams and aspirations.
- May your heart be filled with hope, peace, and love now and always.
- May your life continue to be a testament to your strength and resilience.
- May your birthday be a celebration of your uniqueness and individuality.
- May you continue to shine your light for all to see.
- You are a treasure trove of wisdom, kindness, and compassion, may your day be as special as you are.
- May this new chapter bring you new adventures, new experiences, and new memories.
You are an incredible friend, and I am so grateful for you as you celebrate today.
God bless you and happy birthday once more.`
  },
  {
    name: 'Mrs. Good Head',
    photo: '/assets/friends/mrs-good-head.jpg',
    message: `On this glorious day years ago, the heavens released an angel called Ifeoma. The lady with a heart of gold, who goes all the way to help people, your second name is help. If the world was filled with people like you, there will be peace on earth. The angels are rejoicing as you add another year. More mercy, grace, prosperity and good health will usher you into your new year. God bless your new age. 
Happy birthday
Mrs. Good Head`
  },
  {
    name: 'Raphael Dayo',
    photo: '/assets/friends/raphael-dayo.jpg',
    message: `I want to use this opportunity to wish you a happy birthday, may the goodness and mercy of god locate you and may the light of god shine in your life, and all your prayers shall be answered. Thank you for all you have done for me. 
Happy Birthday, Madam Ifeoma.`
  },
  {
    name: 'The Youngest CEO of GLOBAL SF LOGISTICS LTD',
    photo: '/assets/friends/global-sf-ceo.jpg',
    message: `Happy Birthday To My Lovely Sister,
It's so great to have such an amazing sister like you in my life. Congratulations on your birthday! Stay cool! You are like eating box chocolate: sweet, generous and undeniably amazing.
My prayers for the celebrant.
Ya Allah, Include us & our families among your selected servants who will receive Your favour & blessings today & always.
Grant us Your fear & purify our souls, as You are the best Purifier.
Spread Your Mercy on us & prevent any evil from reaching us, above all, make it easy for us. Ya Allah,t ake care of all our needs, touch our lives with joy & contentment, bless our heart with love & faith, comfort our soul with gladness & inner peace, grant us good health, lasting comfort & relief us from the burdens of life.
May we end well in this life & May Allah reward you with the highest paradise in hereafter. Just say AMIN YAA ALLAH.`
  }
];

export default function WrittenMessages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-cursive text-center text-gold mb-8">
        Written Messages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {messages.map((message) => (
          <motion.div
            key={message.name}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-coral to-gold opacity-20 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src={message.photo}
                  alt={message.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-cursive text-gold text-center mb-4">
              {message.name}
            </h3>

            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              <p className="text-white/90 whitespace-pre-line leading-relaxed">
                {message.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}