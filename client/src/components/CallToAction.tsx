import React from 'react';

const CallToAction: React.FC = () => {
  const scrollToDownload = () => {
    const downloadElement = document.getElementById('download');
    if (downloadElement) {
      downloadElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          Get Your Free Probate Guide
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Download our comprehensive guide to understand the probate process and get started on the right path.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={scrollToDownload}
            className="bg-secondary hover:bg-opacity-90 transition-all text-white font-bold py-3 px-6 rounded-md text-center"
          >
            Download Free PDF
          </button>
          <a 
            href="tel:0276036144" 
            className="bg-white hover:bg-opacity-90 transition-all text-primary font-bold py-3 px-6 rounded-md text-center"
          >
            <span className="mr-2">📞</span>Call 027 603 6144
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
