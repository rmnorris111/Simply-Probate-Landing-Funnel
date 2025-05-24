import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Quiz from '@/components/Quiz';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Quiz />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
