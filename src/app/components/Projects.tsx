import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';
import { siteHref } from '../navigation';

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <>
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
              Selected Work
            </div>
            <h2 className="text-white mb-6">
              Projects &amp; Development
            </h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              From community platforms and climate research to games and personal tools, a growing collection of projects from 2021 through 2026.
            </p>
          </motion.div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={siteHref(`projects/${index + 1}/`)}


                className="group cursor-pointer hoverable relative block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}

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
                    {project.image ? (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    ) : (
                      <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                        <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${project.color}`} />
                        <span className="text-3xl text-white font-semibold tracking-tight">{project.preview}</span>
                        <span className="text-xs text-purple-300 uppercase tracking-widest">{project.year === '2026' ? 'Research spotlight' : 'Community technology'}</span>
                      </div>
                    )}
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
              </motion.a>
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
