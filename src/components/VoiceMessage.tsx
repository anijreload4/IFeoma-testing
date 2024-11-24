import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SpeakerHigh } from '@phosphor-icons/react';

interface VoiceMessageProps {
  title: string;
  audioSrc: string;
}

export default function VoiceMessage({ title, audioSrc }: VoiceMessageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4"
    >
      <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <SpeakerHigh size={20} className="text-gold" />
          <h4 className="text-sm font-medium text-white/90">{title}</h4>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-coral/80 hover:bg-coral text-white transition-colors"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          
          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold/50 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <audio
            ref={audioRef}
            src={audioSrc}
            onEnded={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            className="hidden"
          />
        </div>
      </div>
    </motion.div>
  );
}