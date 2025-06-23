import React from 'react';
import VideoPlayer from '@/components/ui/video-player';

const Hero: React.FC = () => {
  const scrollToDownload = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyK4FzJQsJZcjCfE6Koi_zEJx2T60v04IIaTIg2NsCKtNi9w/viewform?usp=header', '_blank');
  };

  

  return (
    <section className="bg-primary text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text content - hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:w-1/2 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">The Helpful Guide to Probate in NZ (That Actually Makes Sense)</h2>
            <p className="text-lg md:text-xl mb-6">Download our FREE 20-page guide and learn exactly what to do, when to do it, and how much it costs - written for real people, not lawyers.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={scrollToDownload}
                className="bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
              >
                Download Free PDF
              </button>
            </div>
          </div>

          {/* Text content for mobile - shown on mobile, hidden on desktop */}
          <div className="md:hidden mb-8">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Professional Probate Services in New Zealand
            </h2>
            <p className="text-lg mb-6">
              Expert guidance to navigate the probate process with ease and confidence.
            </p>
          </div>
          
          {/* Video */}
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <VideoPlayer />
            </div>
          </div>
          
          {/* Buttons for mobile - shown on mobile, hidden on desktop */}
          <div className="md:hidden mt-6 text-center">
            <div className="flex flex-col gap-3">
              <button 
                onClick={scrollToDownload}
                className="bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
              >
                Download Free PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
