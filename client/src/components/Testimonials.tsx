import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Rion Norris provided an excellent service, exceeding our expectations. We were dealing with a small estate where the deceased and his surviving spouse lived in Europe, but where we had to obtain Probate in NZ in order to deal with a single asset. Rion has a very efficient process which made everything happen without hiccup. His charge was well below the competitive quotes of other law firms and represented excellent value. I have no hesitation in recommending his services.",
    name: "Simon Marks",
    location: "2 weeks ago",
    initials: "S"
  },
  {
    quote: "Excellent, Friendly service. Rion & Abby took the whole angst out of dealing with the Intestacy and probate applications. From our original phone conversation to the receiving of the documents, it was a seamless process. Very grateful, Thank you.",
    name: "Julie Hollamby",
    location: "2 days ago",
    initials: "J"
  },
  {
    quote: "Simply Probate is a breath of fresh air in the world of legal companies. I am so glad such a firm exists. Their service is great. They respond promptly and do an outstanding job. Their price is also very good. More importantly I like the business model that they use. Their process is very transparent. While they generate the application for probate document based on data I entered in an online form, they allow me to submit the application to probate and therefore I am in charge. This is such a contrast to other legal firms where you have no control over what happens and pay a very high fee.",
    name: "Jane Shearer",
    location: "22 hours ago",
    initials: "J"
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
