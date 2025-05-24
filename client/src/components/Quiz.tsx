import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { quizQuestions } from '@/lib/quiz';

interface FormData {
  name: string;
  email: string;
  phone: string;
  contactTime: 'morning' | 'afternoon' | 'evening';
}

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'question' | 'results' | 'thankYou'>('question');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactTime: 'morning'
  });

  const progressPercentage = (currentQuestionIndex / quizQuestions.length) * 100;

  const selectOption = (index: number) => {
    setSelectedOption(index);
  };

  const nextQuestion = () => {
    if (selectedOption === null) return;
    
    // Save answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);
    
    // Move to next question or results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(newAnswers[currentQuestionIndex + 1] !== undefined ? 
                       newAnswers[currentQuestionIndex + 1] : null);
    } else {
      setCurrentScreen('results');
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOption(answers[currentQuestionIndex - 1] !== undefined ? 
                       answers[currentQuestionIndex - 1] : null);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      // Simulating form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a production environment, this would be an API call
      // For this static demo, we'll just show success and move to the next screen
      console.log('Form submitted with:', {
        answers,
        formData
      });
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch soon.",
      });
      
      setCurrentScreen('thankYou');
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section id="quiz" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
            Find Out If You Need Probate
          </h2>
          <p className="text-center text-muted-color mb-12">
            Answer a few simple questions to determine if you need probate services and receive personalized advice.
          </p>
          
          {/* Quiz Component */}
          <div className="bg-light rounded-lg shadow-md p-6 md:p-8">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div 
                className="bg-secondary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            {/* Question Screen */}
            {currentScreen === 'question' && (
              <div className="fade-enter">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  {quizQuestions[currentQuestionIndex].question}
                </h3>
                
                <div className="space-y-4">
                  {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                    <div 
                      key={index}
                      onClick={() => selectOption(index)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedOption === index 
                          ? 'border-secondary bg-secondary/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div 
                          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mr-3 flex items-center justify-center ${
                            selectedOption === index 
                              ? 'bg-secondary border-transparent' 
                              : 'border-gray-300'
                          }`}
                        >
                          {selectedOption === index && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between">
                  {currentQuestionIndex > 0 && (
                    <button 
                      onClick={previousQuestion}
                      className="px-4 py-2 text-primary font-medium hover:text-secondary transition-colors"
                    >
                      <i className="fas fa-arrow-left mr-2"></i> Previous
                    </button>
                  )}
                  {currentQuestionIndex === 0 && <div></div>}
                  <button 
                    onClick={nextQuestion}
                    disabled={selectedOption === null}
                    className={`px-6 py-3 text-white rounded-md font-medium transition-all ${
                      selectedOption !== null 
                        ? 'bg-secondary hover:bg-secondary/90' 
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Next <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            )}
            
            {/* Results Screen */}
            {currentScreen === 'results' && (
              <div className="fade-enter">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-secondary text-2xl"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2">Your Assessment Results</h3>
                  <p className="text-muted-color">Based on your answers, we can provide you with personalized guidance.</p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                  <h4 className="font-heading font-semibold mb-4">Our Recommendation:</h4>
                  <p className="mb-4">It appears you may need probate services to handle the estate properly. Our team can help make this process smooth and stress-free.</p>
                  <p>Complete the form below to receive detailed information specific to your situation.</p>
                </div>
                
                {/* Lead Capture Form */}
                <form onSubmit={submitForm}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1">Best Time to Contact You</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['morning', 'afternoon', 'evening'].map((time) => (
                          <label key={time} className="flex items-center bg-light p-3 rounded-md border border-gray-200 cursor-pointer">
                            <input 
                              type="radio" 
                              name="contactTime" 
                              value={time}
                              checked={formData.contactTime === time}
                              onChange={handleFormChange}
                              className="mr-2"
                            />
                            <span className="capitalize">{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      type="submit"
                      disabled={formSubmitting}
                      className={`w-full py-3 bg-secondary text-white rounded-md font-medium hover:bg-secondary/90 transition-all ${
                        formSubmitting ? 'opacity-75 cursor-wait' : ''
                      }`}
                    >
                      {!formSubmitting ? (
                        <span>Get Your Personalized Probate Plan</span>
                      ) : (
                        <span>
                          <i className="fas fa-spinner fa-spin mr-2"></i> Submitting...
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Thank You Screen */}
            {currentScreen === 'thankYou' && (
              <div className="fade-enter">
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-secondary text-3xl"></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Thank You!</h3>
                  <p className="text-muted-color mb-6">
                    We've received your information and a probate specialist will contact you within 24 hours at your preferred time.
                  </p>
                  <p className="font-medium">
                    Meanwhile, you can call us directly at <a href="tel:0800777123" className="text-secondary hover:underline">0800 777 123</a> if you have urgent questions.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
