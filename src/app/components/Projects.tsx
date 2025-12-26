import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectSplashScreen } from './ProjectSplashScreen';

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    type: 'pingpong' | 'wator' | 'wordle' | 'bakery' | 'scheduler' | 'notes' | 'space' | 'solar';
    github: string;
  } | null>(null);

  const projects = [
    {
      title: 'Ping Pong Game',
      category: 'Game Development',
      description: 'Classic ping pong game with sound effects, collision detection, and smooth gameplay mechanics built from scratch.',
      image: 'https://images.unsplash.com/photo-1719822566379-7547340da87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5nJTIwcG9uZyUyMHRhYmxlJTIwZ2FtZXxlbnwxfHx8fDE3NjY1Mzk3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2021',
      color: 'from-purple-500 to-pink-500',
      tags: ['Game Dev', 'Sound Effects', 'Animation'],
      github: 'https://github.com/prisha777',
      type: 'pingpong' as const
    },
    {
      title: 'WatorWorld Simulation',
      category: 'School Assignment',
      description: 'Predator-prey ecosystem simulation game implementing complex algorithms for population dynamics and behavior patterns.',
      image: 'https://images.unsplash.com/photo-1568691452405-99cbf704e978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVkYXRvciUyMHByZXklMjBzaW11bGF0aW9ufGVufDF8fHx8MTc2NjUzOTcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2022',
      color: 'from-blue-500 to-cyan-500',
      tags: ['Simulation', 'Algorithms', 'Game Logic'],
      github: 'https://github.com/prisha777',
      type: 'wator' as const
    },
    {
      title: 'NYT Wordle Clone',
      category: 'School Assignment',
      description: 'Recreation of the popular NYT Wordle game featuring word validation, color-coded feedback, and keyboard interaction.',
      image: 'https://images.unsplash.com/photo-1552321046-a54642dc0cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkJTIwcHV6emxlJTIwZ2FtZSUyMGxldHRlcnN8ZW58MXx8fHwxNzY2NTM5NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2022',
      color: 'from-pink-500 to-rose-500',
      tags: ['Word Game', 'Interactive', 'UI/UX'],
      github: 'https://github.com/prisha777',
      type: 'wordle' as const
    },
    {
      title: 'Bakery Website',
      category: 'Personal Passion Project',
      description: 'Beautiful website showcasing my passion for baking with recipes, gallery, and elegant design that reflects artisan craft.',
      image: 'https://images.unsplash.com/photo-1642333328966-f248191ff0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cmllcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY2NTM5NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2023',
      color: 'from-orange-500 to-pink-500',
      tags: ['Web Design', 'Passion Project', 'Food'],
      github: 'https://github.com/prisha777',
      type: 'bakery' as const
    },
    {
      title: 'Schedule Planner',
      category: 'Productivity Tool',
      description: 'Time management application that I used throughout school to organize tasks, schedule events, and boost productivity.',
      image: 'https://images.unsplash.com/photo-1588453251771-cd919b362ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHBsYW5uZXIlMjBzY2hlZHVsZXxlbnwxfHx8fDE3NjY1Mzk3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024',
      color: 'from-indigo-500 to-purple-500',
      tags: ['Productivity', 'Time Management', 'Personal Tool'],
      github: 'https://github.com/prisha777',
      type: 'scheduler' as const
    },
    {
      title: 'iNotes',
      category: 'Note-Taking App',
      description: 'JavaScript-based note-taking application with rich text editing, organization features, and local storage functionality.',
      image: 'https://images.unsplash.com/photo-1643094829594-0ae1519d75af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMG5vdGVzJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjY1Mzk3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024',
      color: 'from-emerald-500 to-teal-500',
      tags: ['JavaScript', 'CRUD', 'Local Storage'],
      github: 'https://github.com/prisha777',
      type: 'notes' as const
    },
    {
      title: 'Space Shooter Game',
      category: 'Game Development',
      description: 'Action-packed space shooter with enemy AI, power-ups, scoring system, and engaging gameplay mechanics.',
      image: 'https://images.unsplash.com/photo-1531812494838-636e337af5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNob290ZXIlMjBnYW1lfGVufDF8fHx8MTc2NjUzOTcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2025',
      color: 'from-blue-500 to-purple-500',
      tags: ['Game Dev', 'Space', 'Interactive'],
      github: 'https://github.com/prisha777',
      type: 'space' as const
    },
    {
      title: 'Solar System Orbit Simulator',
      category: 'Educational Simulation',
      description: 'Interactive solar system simulation featuring accurate planetary orbits, physics calculations, and celestial mechanics.',
      image: 'https://images.unsplash.com/photo-1741997699658-d37ee7a2e010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHN5c3RlbSUyMHBsYW5ldHMlMjBvcmJpdHxlbnwxfHx8fDE3NjY1Mzk3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2025',
      color: 'from-cyan-500 to-blue-500',
      tags: ['Physics', 'Simulation', 'Educational'],
      github: 'https://github.com/prisha777',
      type: 'solar' as const
    }
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject({
      title: project.title,
      type: project.type,
      github: project.github
    });
  };

  return (
    <>
      {/* Project Splash Screen */}
      {selectedProject && (
        <ProjectSplashScreen
          project={selectedProject}
          onComplete={() => setSelectedProject(null)}
        />
      )}

      <section id="projects" className="py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-sm tracking-widest uppercase mb-4 text-purple-400">
              GitHub Repository
            </div>
            <h2 className="text-white mb-6">
              GitHub Projects
            </h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              A collection of coding projects from 2021 to 2025, showcasing growth in game development, web design, and educational tools
            </p>
          </motion.div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer hoverable relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Card */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-800/30 rounded-lg overflow-hidden hover:border-purple-600 transition-all">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-slate-800">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                      animate={{
                        opacity: hoveredProject === index ? 0.4 : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color}`}
                      animate={{
                        opacity: hoveredProject === index ? 0.6 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {hoveredProject === index && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-white text-lg uppercase tracking-wider">View Project</div>
                      </motion.div>
                    )}
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs uppercase tracking-wider rounded-full`}>
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`text-sm tracking-widest uppercase mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.category}
                    </div>
                    <h3 className="text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-purple-200 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-800 text-purple-300 text-xs rounded-full border border-purple-800/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/prisha777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm uppercase tracking-wider hoverable"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}