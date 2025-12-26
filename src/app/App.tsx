import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Showcase } from './components/Showcase';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Press } from './components/Press';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/MouseFollower';
import { SplashScreen } from './components/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => setIsLoaded(true), 100);
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden cursor-none">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      
      {!showSplash && (
        <>
          <MouseFollower />
          <Header />
          <main>
            <Hero />
            <About />
            <Gallery />
            <Showcase />
            <Projects />
            <Journey />
            <Press />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}