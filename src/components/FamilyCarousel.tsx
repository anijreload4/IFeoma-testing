import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export default function FamilyCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mb-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-cursive text-white mb-4">The Beauty of Family</h2>
        <p className="text-white/90 mb-4 max-w-2xl mx-auto">
          A family is a tapestry woven with threads of love, memories, and shared dreams. 
          Each member adds their unique color, creating a masterpiece of unconditional love and support.
        </p>
        <blockquote className="text-gold italic">
          "How good and pleasant it is when God's people live together in unity!" - Psalm 133:1
        </blockquote>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="w-full py-8"
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <SwiperSlide key={index} className="w-64 h-64">
            <div className="w-full h-full rounded-lg overflow-hidden border-4 border-white/20">
              <img
                src={`/assets/family/group${index}.jpg`}
                alt={`Family Moment ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}