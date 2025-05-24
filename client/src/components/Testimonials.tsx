import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Simply Probate made a difficult time so much easier. Their team was compassionate, professional, and efficient. They handled everything with minimal input needed from me.",
    name: "Margaret Harris",
    location: "Auckland",
    initials: "MH"
  },
  {
    quote: "The fixed fee approach was refreshing and transparent. No surprises, just excellent service from start to finish. I've already recommended them to friends.",
    name: "David Thompson",
    location: "Wellington",
    initials: "DT"
  },
  {
    quote: "I was dreading the probate process, but Simply Probate made it straightforward. Their expertise saved us weeks of stress and confusion.",
    name: "Sarah Liu",
    location: "Christchurch",
    initials: "SL"
  }
];

const Testimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <p className="text-center text-muted-color mb-12 max-w-2xl mx-auto">
          We've helped hundreds of families through the probate process. Here's what some of them have to say about our services.
        </p>
        
        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card">
                    <div className="text-secondary text-2xl mb-4">
                      "
                    </div>
                    <p className="text-muted-color mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary font-bold">{testimonial.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-color">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveSlide(index)} 
                className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                  activeSlide === index ? 'bg-secondary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
              </button>
            ))}
          </div>
          
          {/* Arrow Navigation (hidden on mobile) */}
          <button 
            onClick={prevSlide} 
            className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-primary hover:text-secondary focus:outline-none"
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button 
            onClick={nextSlide} 
            className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-primary hover:text-secondary focus:outline-none"
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
