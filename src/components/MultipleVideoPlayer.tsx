import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface Video {
  id: string;
  title: string;
}

interface MultipleVideoPlayerProps {
  videos: Video[];
}

export default function MultipleVideoPlayer({ videos }: MultipleVideoPlayerProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative">
      <div className="relative pt-[56.25%] mb-4 bg-black/20 rounded-lg overflow-hidden">
        <iframe
          src={`https://drive.google.com/file/d/${videos[currentVideoIndex].id}/preview`}
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {videos.length > 1 && (
        <div className="flex items-center justify-between gap-4 mt-2">
          <button
            onClick={previousVideo}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <CaretLeft size={24} />
          </button>

          <div className="flex-1 text-center">
            <p className="text-white/80 text-sm">
              {videos[currentVideoIndex].title}
            </p>
            <p className="text-white/60 text-xs">
              {currentVideoIndex + 1} / {videos.length}
            </p>
          </div>

          <button
            onClick={nextVideo}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <CaretRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}