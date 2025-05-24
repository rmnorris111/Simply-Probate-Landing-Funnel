import React from 'react';

const CallToAction: React.FC = () => {
  const scrollToQuiz = () => {
    const quizElement = document.getElementById('quiz');
    if (quizElement) {
      quizElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          Ready to Get Started with Probate?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Our team of probate specialists is ready to help you navigate this complex process with ease.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={scrollToQuiz}
            className="bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
          >
            Start Free Assessment
          </button>
          <a 
            href="tel:0800777123" 
            className="bg-white hover:bg-opacity-90 transition-all text-primary font-bold py-3 px-6 rounded-md text-center"
          >
            <i className="fas fa-phone-alt mr-2"></i>Call 0800 777 123
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
