import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import profileImage from "@/assets/profile_img.png"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phase, setPhase] = useState(0); // 0: typing first text, 1: deleting, 2: typing second text

  const firstText = "Hello, my name is Prisha";
  const secondText = "Welcome to my online home.";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 0) {
      // Typing first text
      if (displayText.length < firstText.length) {
        timeout = setTimeout(() => {
          setDisplayText(firstText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setPhase(1);
        }, 2000);
      }
    } else if (phase === 1) {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setPhase(2);
      }
    } else if (phase === 2) {
      // Typing second text
      if (displayText.length < secondText.length) {
        timeout = setTimeout(() => {
          setDisplayText(secondText.slice(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase]);

  const ctaButtons = [
    { label: 'View Projects', icon: '🚀', id: 'projects', color: 'from-purple-600 to-pink-600' },
    { label: 'Connect', icon: '💬', id: 'contact', color: 'from-blue-600 to-cyan-600' },
    { label: 'About Me', icon: '👤', id: 'about', color: 'from-pink-600 to-rose-600' },
    { label: 'Gallery', icon: '🎨', id: 'gallery', color: 'from-indigo-600 to-purple-600' },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-40" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 text-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-wrap justify-center gap-6 text-sm text-purple-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-purple-500">📧</span>
            <a href="mailto:goelprisha.07@gmail.com" className="hover:text-purple-400 transition-colors">
              goelprisha.07@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-500">💼</span>
            <a href="https://www.linkedin.com/in/prisha-goel-118421287/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl">
              <img
                src={profileImage}
                alt="Prisha Goel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Typing Animation Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 min-h-[120px] flex items-center justify-center"
        >
          <h1 className="tracking-tight text-white text-4xl md:text-6xl">
            {displayText}
            <span className="inline-block w-1 h-12 md:h-16 bg-purple-500 ml-2 animate-pulse" />
          </h1>
        </motion.div>

        {/* CTA Buttons - Modern Round Social Media Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {ctaButtons.map((button, index) => (
            <motion.button
              key={index}
              onClick={() => document.getElementById(button.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`group relative px-8 py-4 bg-gradient-to-r ${button.color} text-white rounded-full text-sm uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-2xl transition-shadow hoverable`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              />
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl">{button.icon}</span>
                {button.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-purple-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-purple-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute bottom-20 left-20 w-20 h-20 border-2 border-purple-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 right-20 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}