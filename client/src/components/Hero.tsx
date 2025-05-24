import React from 'react';
import VideoPlayer from '@/components/ui/video-player';

const Hero: React.FC = () => {
  const scrollToQuiz = () => {
    const quizElement = document.getElementById('quiz');
    if (quizElement) {
      quizElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text content - hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:w-1/2 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Professional Probate Services in New Zealand
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Expert guidance to navigate the probate process with ease and confidence.
            </p>
            <button 
              onClick={scrollToQuiz}
              className="inline-block bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
            >
              Start Free Assessment
            </button>
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
          
          {/* Button for mobile - shown on mobile, hidden on desktop */}
          <div className="md:hidden mt-6 text-center">
            <button 
              onClick={scrollToQuiz}
              className="inline-block bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
            >
              Start Free Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
