import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const celebrantPhotos = [
  '/assets/celebrant/photo1.jpg',
  '/assets/celebrant/photo2.jpg',
  '/assets/celebrant/photo3.jpg',
  '/assets/celebrant/photo4.jpg',
  '/assets/celebrant/photo5.jpg',
  '/assets/celebrant/photo6.jpg',
  '/assets/celebrant/photo7.jpg',
  '/assets/celebrant/photo8.jpg',
  '/assets/celebrant/photo9.jpg',
  '/assets/celebrant/photo10.jpg',
];

export default function PhotoCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mb-12"
    >
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
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
        {celebrantPhotos.map((src, index) => (
          <SwiperSlide key={index} className="w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
              <img
                src={src}
                alt={`Celebrating Ifeoma ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority={index < 3 ? "high" : "low"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}