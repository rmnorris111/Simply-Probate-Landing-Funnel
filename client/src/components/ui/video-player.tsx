import React from 'react';
import pdfImage from '@assets/Blue pdf img - drop shadow_1750636258426.png';

const VideoPlayer: React.FC = () => {
  const scrollToDownload = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyK4FzJQsJZcjCfE6Koi_zEJx2T60v04IIaTIg2NsCKtNi9w/viewform?usp=header', '_blank');
  };
  
  return (
    <div className="relative rounded-lg overflow-hidden bg-white flex items-center justify-center p-8">
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
