import React, { useState } from 'react';

const VideoPlayer: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  
  // Replace with actual video URL in production
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
  
  const handlePlay = () => {
    setPlaying(true);
  };
  
  return (
    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden bg-black/10">
      {!playing ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-lg">
          <div className="text-center">
            <button 
              onClick={handlePlay}
              className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-white transition-all"
              aria-label="Play video"
            >
              <span className="text-primary text-xl md:text-2xl ml-1">►</span>
            </button>
            <p className="mt-4 text-white font-medium">Watch our explainer video</p>
          </div>
        </div>
      ) : (
        <iframe 
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Simply Probate Explainer Video"
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
