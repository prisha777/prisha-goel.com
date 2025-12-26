import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface ProjectSplashScreenProps {
  project: {
    title: string;
    type: 'pingpong' | 'wator' | 'wordle' | 'bakery' | 'scheduler' | 'notes' | 'space' | 'solar';
    github: string;
  } | null;
  onComplete: () => void;
}

export function ProjectSplashScreen({ project, onComplete }: ProjectSplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!project) return;

    const duration = 4000; // 4 seconds
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          window.open(project.github, '_blank');
          onComplete();
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [project, onComplete]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Render specific animation based on project type */}
        {project.type === 'pingpong' && <PingPongAnimation />}
        {project.type === 'wator' && <WatorAnimation />}
        {project.type === 'wordle' && <WordleAnimation />}
        {project.type === 'bakery' && <BakeryAnimation />}
        {project.type === 'scheduler' && <SchedulerAnimation />}
        {project.type === 'notes' && <NotesAnimation />}
        {project.type === 'space' && <SpaceAnimation />}
        {project.type === 'solar' && <SolarAnimation />}

        {/* Project Title */}
        <motion.div
          className="absolute top-1/4 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-white mb-4">{project.title}</h2>
          <p className="text-purple-300 text-xl">Taking you to GitHub...</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-purple-300 text-center mt-2 text-sm">{Math.round(progress)}%</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Ping Pong Animation
function PingPongAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Table */}
      <div className="relative w-[600px] h-[400px] border-4 border-purple-500 rounded-lg bg-slate-900/50">
        {/* Net */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/50" />
        
        {/* Ball */}
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full shadow-lg shadow-purple-500"
          animate={{
            x: [50, 550, 50],
            y: [100, 50, 300, 100],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Left Paddle */}
        <motion.div
          className="absolute left-8 w-3 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          animate={{
            y: [100, 200, 100],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Right Paddle */}
        <motion.div
          className="absolute right-8 w-3 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          animate={{
            y: [200, 100, 200],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}

// Wator World (Predator-Prey) Animation
function WatorAnimation() {
  const fish = Array.from({ length: 15 }, (_, i) => i);
  const sharks = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950">
      {/* Fish */}
      {fish.map((f) => (
        <motion.div
          key={`fish-${f}`}
          className="absolute text-4xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🐟
        </motion.div>
      ))}
      
      {/* Sharks */}
      {sharks.map((s) => (
        <motion.div
          key={`shark-${s}`}
          className="absolute text-5xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🦈
        </motion.div>
      ))}
    </div>
  );
}

// Wordle Animation
function WordleAnimation() {
  const letters = ['C', 'O', 'D', 'E', 'S'];
  const colors = ['bg-green-500', 'bg-yellow-500', 'bg-slate-600', 'bg-green-500', 'bg-green-500'];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex gap-2">
        {letters.map((letter, i) => (
          <motion.div
            key={i}
            className={`w-16 h-16 ${colors[i]} rounded-lg flex items-center justify-center text-white font-bold text-2xl border-2 border-slate-400`}
            initial={{ scale: 0, rotateY: 0 }}
            animate={{ 
              scale: 1,
              rotateY: 360,
            }}
            transition={{
              delay: i * 0.2,
              scale: { duration: 0.3 },
              rotateY: { duration: 0.6, delay: i * 0.2 }
            }}
          >
            {letter}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Bakery Animation
function BakeryAnimation() {
  const treats = ['🍰', '🧁', '🥐', '🍪', '🥖', '🎂'];

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-900 to-orange-900">
      <motion.div
        className="text-9xl"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      >
        🍰
      </motion.div>
      
      {/* Floating treats */}
      {treats.map((treat, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl"
          initial={{
            x: Math.cos(i * (Math.PI * 2 / treats.length)) * 200,
            y: Math.sin(i * (Math.PI * 2 / treats.length)) * 200,
          }}
          animate={{
            x: Math.cos(i * (Math.PI * 2 / treats.length)) * 250,
            y: Math.sin(i * (Math.PI * 2 / treats.length)) * 250,
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {treat}
        </motion.div>
      ))}
    </div>
  );
}

// Scheduler Animation
function SchedulerAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-12 bg-slate-800 rounded border border-purple-500/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
            >
              <motion.div
                className={`w-full h-full rounded ${i % 7 === 2 || i % 7 === 4 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : ''}`}
                animate={i % 7 === 2 || i % 7 === 4 ? { opacity: [0.3, 1, 0.3] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Clock Icon */}
        <motion.div
          className="absolute -top-20 left-1/2 -translate-x-1/2 text-7xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          ⏰
        </motion.div>
      </div>
    </div>
  );
}

// Notes Animation
function NotesAnimation() {
  const notes = ['📝', '📋', '📄', '📑', '🗒️'];

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-900 to-teal-900">
      {notes.map((note, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl"
          initial={{ 
            x: -200,
            y: -200 + i * 100,
            rotate: -45,
            opacity: 0 
          }}
          animate={{ 
            x: window.innerWidth + 200,
            y: -200 + i * 100 + Math.sin(i) * 100,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 5,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {note}
        </motion.div>
      ))}
    </div>
  );
}

// Space Shooter Animation
function SpaceAnimation() {
  const stars = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="absolute inset-0 bg-black">
      {/* Stars */}
      {stars.map((s) => (
        <motion.div
          key={s}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
      
      {/* Spaceship */}
      <motion.div
        className="absolute text-8xl"
        initial={{ x: -100, y: '50vh' }}
        animate={{ 
          x: window.innerWidth + 100,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        🚀
      </motion.div>
      
      {/* Enemies */}
      <motion.div
        className="absolute text-6xl"
        initial={{ x: window.innerWidth, y: 100 }}
        animate={{ 
          x: -100,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        👾
      </motion.div>
      
      <motion.div
        className="absolute text-6xl"
        initial={{ x: window.innerWidth, y: 300 }}
        animate={{ 
          x: -100,
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        👾
      </motion.div>
    </div>
  );
}

// Solar System Animation
function SolarAnimation() {
  const planets = [
    { emoji: '☿️', size: 'text-3xl', radius: 80, duration: 3 },
    { emoji: '♀️', size: 'text-4xl', radius: 120, duration: 5 },
    { emoji: '🌍', size: 'text-5xl', radius: 160, duration: 7 },
    { emoji: '♂️', size: 'text-4xl', radius: 200, duration: 9 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      {/* Sun */}
      <motion.div
        className="absolute text-9xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ☀️
      </motion.div>
      
      {/* Orbiting Planets */}
      {planets.map((planet, i) => (
        <motion.div
          key={i}
          className={`absolute ${planet.size}`}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: planet.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transformOrigin: `0px 0px`,
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              left: planet.radius,
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: planet.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {planet.emoji}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}