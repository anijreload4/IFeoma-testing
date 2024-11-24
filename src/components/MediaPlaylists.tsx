import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack } from '@phosphor-icons/react';

const youtubeVideos = [
  {
    id: 'VIDEO_ID_1',
    title: 'Amazing Grace - Chris Tomlin',
    thumbnail: '/assets/media/thumbnails/video1.jpg'
  },
  {
    id: 'VIDEO_ID_2',
    title: 'Way Maker - Sinach',
    thumbnail: '/assets/media/thumbnails/video2.jpg'
  },
  {
    id: 'VIDEO_ID_3',
    title: 'You Are Great - Steve Crown',
    thumbnail: '/assets/media/thumbnails/video3.jpg'
  },
  {
    id: 'VIDEO_ID_4',
    title: 'Take Me to the King - Tamela Mann',
    thumbnail: '/assets/media/thumbnails/video4.jpg'
  },
  {
    id: 'VIDEO_ID_5',
    title: 'Total Praise - Richard Smallwood',
    thumbnail: '/assets/media/thumbnails/video5.jpg'
  }
];

const musicPlaylist = [
  {
    title: 'You Are My Strength',
    artist: 'Sinach',
    src: '/assets/media/music/song1.mp3'
  },
  {
    title: 'Alpha and Omega',
    artist: 'Israel & New Breed',
    src: '/assets/media/music/song2.mp3'
  },
  {
    title: 'Great is Your Mercy',
    artist: 'Donnie McClurkin',
    src: '/assets/media/music/song3.mp3'
  },
  {
    title: 'My Help',
    artist: 'Brooklyn Tabernacle Choir',
    src: '/assets/media/music/song4.mp3'
  },
  {
    title: 'Total Praise',
    artist: 'Richard Smallwood',
    src: '/assets/media/music/song5.mp3'
  }
];

export default function MediaPlaylists() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('videos');

  const handleNext = () => {
    if (activeTab === 'videos') {
      setCurrentVideoIndex((prev) => (prev + 1) % youtubeVideos.length);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % musicPlaylist.length);
    }
  };

  const handlePrevious = () => {
    if (activeTab === 'videos') {
      setCurrentVideoIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + musicPlaylist.length) % musicPlaylist.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto mb-12"
    >
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('videos')}
          className={`flex-1 py-2 rounded-lg transition-colors ${
            activeTab === 'videos' ? 'bg-coral text-white' : 'bg-white/10 text-white/80'
          }`}
        >
          Video Playlist
        </button>
        <button
          onClick={() => setActiveTab('music')}
          className={`flex-1 py-2 rounded-lg transition-colors ${
            activeTab === 'music' ? 'bg-coral text-white' : 'bg-white/10 text-white/80'
          }`}
        >
          Music Playlist
        </button>
      </div>

      {activeTab === 'videos' ? (
        <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
          <div className="relative pt-[56.25%]">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[currentVideoIndex].id}`}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="text-white font-semibold mb-4">
              {youtubeVideos[currentVideoIndex].title}
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-coral/80 hover:bg-coral text-white"
              >
                <SkipBack size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-coral/80 hover:bg-coral text-white"
              >
                <SkipForward size={24} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-2">
              {musicPlaylist[currentSongIndex].title}
            </h3>
            <p className="text-white/80 text-sm">
              {musicPlaylist[currentSongIndex].artist}
            </p>
          </div>
          
          <audio
            src={musicPlaylist[currentSongIndex].src}
            className="w-full mb-4"
            controls
          />
          
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-coral/80 hover:bg-coral text-white"
            >
              <SkipBack size={24} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-coral/80 hover:bg-coral text-white"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-coral/80 hover:bg-coral text-white"
            >
              <SkipForward size={24} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}