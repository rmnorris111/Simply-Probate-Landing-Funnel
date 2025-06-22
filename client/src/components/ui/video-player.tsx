import React from 'react';
import pdfImage from '@assets/Blue pdf img - drop shadow_1750636258426.png';

const VideoPlayer: React.FC = () => {
  const scrollToDownload = () => {
    const downloadElement = document.getElementById('download');
    if (downloadElement) {
      downloadElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
      <div className="cursor-pointer transition-transform hover:scale-105" onClick={scrollToDownload}>
        <img 
          src={pdfImage} 
          alt="The Helpful Guide to Probate in NZ - Free PDF Download"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
