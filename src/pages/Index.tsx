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
    <div id="main-content" style={{ minHeight: '100vh', position: 'relative', background: 'var(--bg-color)' }}>
      <Suspense fallback={<div style={{ position: 'absolute', inset: 0 }} />}>
        <AuroraBackground />
      </Suspense>
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="container" style={{ padding: '5rem 0' }} />}>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
