import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import CostCalculator from '@/components/CostCalculator';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';

import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CostCalculator />
        <Testimonials />
        <Pricing />

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
