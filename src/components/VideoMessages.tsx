import { motion } from 'framer-motion';
import MultipleVideoPlayer from './MultipleVideoPlayer';

const videoMessages = [
  {
    name: 'Pastor Adeyemi',
    videoId: 'PASTOR_ADEYEMI_VIDEO_ID',
    type: 'single'
  },
  {
    name: 'Ada',
    videos: [
      { id: 'ADA_VIDEO_1_ID', title: 'Birthday Message' },
      { id: 'ADA_VIDEO_2_ID', title: 'Special Memories' }
    ],
    type: 'multiple'
  },
  {
    name: 'Bro Moses',
    videoId: 'BRO_MOSES_VIDEO_ID',
    type: 'single'
  },
  {
    name: 'Chizara Stephen',
    videoId: 'CHIZARA_VIDEO_ID',
    type: 'single'
  },
  {
    name: 'Eke Adaeze',
    videoId: 'EKE_VIDEO_ID',
    type: 'single'
  },
  {
    name: 'Tijesunimi Adeyemi',
    videoId: 'TIJESUNIMI_VIDEO_ID',
    type: 'single'
  }
];

export default function VideoMessages() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto mb-12"
    >
      <h2 className="text-3xl font-cursive text-center text-gold mb-8">
        Video Messages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videoMessages.map((message) => (
          <motion.div
            key={message.name}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xl font-cursive text-white mb-4 text-center">
                {message.name}
              </h3>
              
              {message.type === 'single' ? (
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={`https://drive.google.com/file/d/${message.videoId}/preview`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ) : (
                <MultipleVideoPlayer videos={message.videos} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}