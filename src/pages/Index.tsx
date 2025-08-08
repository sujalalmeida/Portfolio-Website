import React, { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
const About = React.lazy(() => import('@/components/About'));
const Projects = React.lazy(() => import('@/components/Projects'));
const Contact = React.lazy(() => import('@/components/Contact'));
const Footer = React.lazy(() => import('@/components/Footer'));
const AuroraBackground = React.lazy(() => import('@/components/AuroraBackground'));

const Index = () => {
  return (
    <div id="main-content" className="min-h-screen bg-background relative">
      <Suspense fallback={<div className="absolute inset-0" />}>
        <AuroraBackground />
      </Suspense>
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="max-w-6xl mx-auto px-6 py-20" />}>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
