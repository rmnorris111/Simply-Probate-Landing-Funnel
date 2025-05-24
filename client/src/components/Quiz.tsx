import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { quizQuestions, calculateQuizResult, getResultMessage } from '@/lib/quiz';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [currentScreen, setCurrentScreen] = useState<'question' | 'results' | 'thankYou'>('question');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [resultMessage, setResultMessage] = useState('');
  const [isQualified, setIsQualified] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  const progressPercentage = (currentQuestionIndex / quizQuestions.length) * 100;

  const selectOption = (value: string) => {
    setSelectedValue(value);
  };

  const nextQuestion = () => {
    if (selectedValue === '') return;
    
    // Save answer
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const newAnswers = { ...quizAnswers };
    newAnswers[currentQuestion.id] = selectedValue;
    setQuizAnswers(newAnswers);
    
    // Move to next question or results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      
      // Set selected value for next question if it exists
      const nextQuestion = quizQuestions[currentQuestionIndex + 1];
      setSelectedValue(newAnswers[nextQuestion.id] || '');
    } else {
      // Calculate results and take appropriate action based on result
      const result = calculateQuizResult(newAnswers);
      
      // Handle redirections based on nextAction
      if (result.nextAction === 'home') {
        // Redirect to main website
        window.location.href = 'https://simplyprobate.co.nz';
        return;
      }
      
      // Only show results screen if not redirected
      setIsQualified(result.isQualified);
      setResultMessage(getResultMessage(result, newAnswers));
      setCurrentScreen('results');
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      
      // Set selected value for previous question
      const prevQuestion = quizQuestions[currentQuestionIndex - 1];
      setSelectedValue(quizAnswers[prevQuestion.id] || '');
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
      
      // Log form data for debugging
      console.log('Form submitted with:', {
        quizAnswers,
        formData
      });
      
      toast({
        title: "Form submitted successfully!",
        description: "Redirecting to booking calendar...",
      });
      
      // Get result again to determine calendar action
      const result = calculateQuizResult(quizAnswers);
      if (result.nextAction === 'calendar') {
        // Redirect to Calendly
        window.location.href = 'https://calendly.com/rionnorris/15min';
        return;
      } else {
        // Normal flow - open in new tab and show thank you screen
        window.open('https://calendly.com/rionnorris/15min', '_blank');
        setCurrentScreen('thankYou');
      }
      
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
                
                {quizQuestions[currentQuestionIndex].helpText && (
                  <p className="text-gray-600 mb-6">{quizQuestions[currentQuestionIndex].helpText}</p>
                )}
                
                <div className="space-y-4">
                  {quizQuestions[currentQuestionIndex].options.map((option) => (
                    <div 
                      key={option.value}
                      onClick={() => selectOption(option.value)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedValue === option.value
                          ? 'border-secondary bg-secondary/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div 
                          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mr-3 flex items-center justify-center ${
                            selectedValue === option.value
                              ? 'bg-secondary border-transparent' 
                              : 'border-gray-300'
                          }`}
                        >
                          {selectedValue === option.value && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span>{option.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between">
                  {currentQuestionIndex > 0 && (
                    <button 
                      onClick={previousQuestion}
                      className="px-4 py-2 text-primary font-medium hover:text-secondary hover:underline transition-all"
                    >
                      <span className="mr-2">←</span> Previous
                    </button>
                  )}
                  {currentQuestionIndex === 0 && <div></div>}
                  <button 
                    onClick={nextQuestion}
                    disabled={selectedValue === ''}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${
                      selectedValue !== '' 
                        ? 'bg-secondary text-white hover:bg-white hover:text-secondary border border-secondary' 
                        : 'bg-gray-300 text-white cursor-not-allowed'
                    }`}
                  >
                    Next <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Results Screen */}
            {currentScreen === 'results' && (
              <div className="fade-enter">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2">Your Assessment Results</h3>
                  <p className="text-muted-color">Based on your answers, we can provide you with personalized guidance.</p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                  <h4 className="font-heading font-semibold mb-4">Our Recommendation:</h4>
                  <p className="mb-4">{resultMessage}</p>
                  {isQualified && (
                    <p>Complete the form below to book your free consultation with our probate specialist.</p>
                  )}
                </div>
                
                {/* Lead Capture Form - Only show if qualified */}
                {isQualified ? (
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
                    </div>
                    
                    <div className="mt-8">
                      <button 
                        type="submit"
                        disabled={formSubmitting}
                        className={`w-full py-3 bg-secondary text-white rounded-md font-medium hover:bg-white hover:text-secondary border border-secondary transition-all ${
                          formSubmitting ? 'opacity-75 cursor-wait' : ''
                        }`}
                      >
                        {!formSubmitting ? (
                          <span>Book My Free 15 Mins Call</span>
                        ) : (
                          <span>
                            <span className="mr-2">⏳</span> Submitting...
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="mt-8">
                    <a 
                      href="/"
                      className="w-full block py-3 text-center bg-primary text-white rounded-md font-medium hover:bg-white hover:text-primary border border-primary transition-all"
                    >
                      Return to Homepage
                    </a>
                  </div>
                )}
              </div>
            )}
            
            {/* Thank You Screen */}
            {currentScreen === 'thankYou' && (
              <div className="fade-enter">
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-secondary text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Thank You!</h3>
                  <p className="text-muted-color mb-6">
                    We've received your information and a probate specialist will contact you within 24 hours at your preferred time.
                  </p>
                  <p className="font-medium">
                    Meanwhile, you can call us directly at <a href="tel:0276036144" className="text-secondary hover:underline">027 603 6144</a> if you have urgent questions.
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
