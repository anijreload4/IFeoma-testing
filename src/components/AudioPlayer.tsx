import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SpeakerHigh, SpeakerLow } from '@phosphor-icons/react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Handle page visibility change
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    // Handle other media playing
    const handleOtherMedia = (event: Event) => {
      const target = event.target as HTMLMediaElement;
      if (target !== audioRef.current && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('play', handleOtherMedia, true);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('play', handleOtherMedia, true);
    };
  }, []);

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

  const handleVolumeChange = () => {
    setVolume(volume === 1 ? 0.5 : 1);
    if (audioRef.current) {
      audioRef.current.volume = volume === 1 ? 0.5 : 1;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center gap-2">
      <audio
        ref={audioRef}
        src="/assets/media/background-music.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-coral/80 hover:bg-coral text-white transition-colors"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button
        onClick={handleVolumeChange}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
      >
        {volume === 1 ? <SpeakerHigh size={20} /> : <SpeakerLow size={20} />}
      </button>
    </div>
  );
}