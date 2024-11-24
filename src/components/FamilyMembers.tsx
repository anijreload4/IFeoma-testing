import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from '@phosphor-icons/react';
import MultipleVideoPlayer from './MultipleVideoPlayer';

const familyMembers = [
  {
    name: 'Mrs. T.T Umeanor',
    role: 'Mom',
    photo: '/assets/family/mom.jpg',
    message: "My dearest daughter, you are a testament to God's faithfulness and grace. Your strength, wisdom, and love continue to inspire us all. May this new year bring you abundant joy and countless blessings.",
    type: 'photo',
    hasVoice: true,
    voiceTitle: "Mom's Special Message",
    voiceSrc: '/assets/media/mom-message.mp3'
  },
  {
    name: 'Uchenna and Family',
    role: 'Sister',
    videos: [
      { id: 'FIRST_VIDEO_ID_HERE', title: 'Birthday Wishes' },
      { id: 'SECOND_VIDEO_ID_HERE', title: 'Family Memories' }
    ],
    message: "To my beloved sister, your light shines so bright and touches everyone around you. Your dedication to family and faith is truly remarkable. May your special day be filled with love and laughter.",
    type: 'multiple-videos'
  },
  {
    name: 'OBD Dynasty',
    role: 'Brother',
    photos: [
      '/assets/family/obd1.jpg',
      '/assets/family/obd2.jpg',
      '/assets/family/obd3.jpg'
    ],
    message: "Dear sister, your resilience and dedication to family values have always been an inspiration. May this special day bring you joy beyond measure.",
    type: 'carousel',
    hasVoice: true,
    voiceTitle: "Message from OBD",
    voiceSrc: '/assets/media/obd-message.mp3'
  },
  {
    name: 'Anwulika',
    role: 'Kid Sister',
    photo: '/assets/family/anwulika.jpg',
    message: "To my amazing big sister, you've been my role model and guiding light. Your wisdom, grace, and unwavering faith have shaped not just me, but our entire family. Thank you for always being there with your loving heart and gentle spirit. May this birthday bring you as much joy as you've brought to all our lives.",
    type: 'photo',
    hasVoice: true,
    voiceTitle: "Message from Anwulika",
    voiceSrc: '/assets/media/anwulika-message.mp3'
  },
  {
    name: 'Nathan',
    role: 'Special Nephew',
    photo: '/assets/family/nathan.jpg',
    message: "Happy birthday to the most wonderful aunt! Your love and guidance mean the world to me. May your special day be filled with all the happiness you deserve.",
    type: 'photo',
    hasVoice: true,
    voiceTitle: "Nathan's Birthday Wish",
    voiceSrc: '/assets/media/nathan-message.mp3'
  },
  {
    name: 'Victory and Deborah',
    role: 'Special Nieces',
    photo: '/assets/family/victory-deborah.jpg',
    message: "Dear Aunty, your love and care have made such a difference in our lives. We're blessed to have you as our aunt. Happy birthday!",
    type: 'photo',
    hasVoice: true,
    voiceTitle: "Message from Victory and Deborah",
    voiceSrc: '/assets/media/victory-deborah-message.mp3'
  }
];

export default function FamilyMembers() {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [playingStates, setPlayingStates] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselIndex((prev) => 
        (prev + 1) % (familyMembers.find(m => m.type === 'carousel')?.photos?.length || 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const togglePlay = (memberName: string) => {
    // Stop all other playing audio first
    Object.entries(audioRefs.current).forEach(([key, audio]) => {
      if (key !== memberName && audio && !audio.paused) {
        audio.pause();
        setPlayingStates(prev => ({ ...prev, [key]: false }));
      }
    });

    const currentAudio = audioRefs.current[memberName];
    if (currentAudio) {
      if (playingStates[memberName]) {
        currentAudio.pause();
      } else {
        currentAudio.play().catch(console.error);
      }
      setPlayingStates(prev => ({ ...prev, [memberName]: !prev[memberName] }));
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio && !audio.paused) {
          audio.pause();
        }
      });
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {familyMembers.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6"
        >
          <div className="mb-4">
            <h3 className="text-2xl font-cursive text-gold text-center">{member.name}</h3>
            <p className="text-white/80 text-center">{member.role}</p>
          </div>

          {member.type === 'photo' && (
            <div className="relative w-48 h-48 mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-coral to-gold opacity-20 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {member.type === 'multiple-videos' && 'videos' in member && (
            <MultipleVideoPlayer videos={member.videos} />
          )}

          {member.type === 'carousel' && 'photos' in member && (
            <div className="relative h-48 mb-4">
              {member.photos.map((photo, photoIndex) => (
                <motion.div
                  key={photo}
                  initial={false}
                  animate={{
                    opacity: photoIndex === activeCarouselIndex ? 1 : 0,
                    scale: photoIndex === activeCarouselIndex ? 1 : 0.8,
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={photo}
                    alt={`${member.name} ${photoIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          )}

          <p className="text-white/90 text-center mb-4">{member.message}</p>

          {member.hasVoice && member.voiceSrc && (
            <div className="mt-4">
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => togglePlay(member.name)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-coral/80 hover:bg-coral text-white transition-colors"
                  >
                    {playingStates[member.name] ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <div className="text-white/80 text-sm">
                    {playingStates[member.name] ? "Playing..." : member.voiceTitle || "Click to play voice note"}
                  </div>
                </div>
                <audio
                  ref={el => audioRefs.current[member.name] = el}
                  src={member.voiceSrc}
                  onEnded={() => setPlayingStates(prev => ({ ...prev, [member.name]: false }))}
                  preload="none"
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}