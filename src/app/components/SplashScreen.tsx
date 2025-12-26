import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'PRISHA GOEL';
  const [showCursor, setShowCursor] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Typing effect
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // After typing completes, wait a bit then fade out
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, onComplete]);

  useEffect(() => {
    // Cursor blink
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        {/* Main typing text */}
        <div className="mb-12">
          <motion.div
            className="text-6xl md:text-8xl font-bold tracking-wider text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayText}
            <span className={`inline-block w-1 h-16 md:h-24 bg-purple-500 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </motion.div>
          <motion.div
            className="text-purple-400 text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Portfolio Interface v2.0
          </motion.div>
        </div>

        {/* Loading bar */}
        <motion.div
          className="w-80 max-w-full mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-between text-xs text-purple-400 mb-2">
            <span>INITIALIZING...</span>
            <span>{loadingProgress}%</span>
          </div>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-purple-500 mt-2 font-mono">
            &gt; Loading creative assets...
          </div>
        </motion.div>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500 opacity-50" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500 opacity-50" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-purple-500 opacity-50" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-500 opacity-50" />
      </div>
    </motion.div>
  );
}
