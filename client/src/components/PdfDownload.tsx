import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const PdfDownload: React.FC = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    setFormSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your free probate guide will be sent to your email shortly.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '' });
      
      // In a real application, you would trigger the PDF download here
      // window.open('/path-to-your-pdf.pdf', '_blank');
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section id="download" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
            Download Your Free Probate Guide
          </h2>
          <p className="text-center text-muted-color mb-12">
            Get our comprehensive guide that explains the probate process in simple terms, 
            including timelines, costs, and what to expect every step of the way.
          </p>
          
          {/* Download Form */}
          <div className="bg-light rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold mb-4 text-center">
                Enter Your Details to Download
              </h3>
              <p className="text-gray-600 text-center mb-6">
                We'll send the PDF guide directly to your email and never spam you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitting}
                className="w-full bg-secondary hover:bg-opacity-90 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-md transition-all"
              >
                {formSubmitting ? 'Sending...' : 'Download Free PDF Guide'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                📄 Comprehensive 15-page guide covering all aspects of probate in New Zealand
              </p>
            </div>
          </div>

          {/* Benefits of the PDF */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
              <p className="text-sm text-gray-600">Clear explanation of each stage in the probate process</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💰</span>
              </div>
              <h4 className="font-semibold mb-2">Cost Breakdown</h4>
              <p className="text-sm text-gray-600">Understand all fees and expenses involved</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⏱️</span>
              </div>
              <h4 className="font-semibold mb-2">Timeline Guide</h4>
              <p className="text-sm text-gray-600">Know exactly how long each step takes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfDownload;