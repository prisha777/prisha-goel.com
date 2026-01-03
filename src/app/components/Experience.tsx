import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      year: '2024',
      title: 'Digital Innovation',
      role: 'Creative Technologist',
      description: 'Leading innovative digital projects, combining design thinking with technical expertise to create impactful solutions.',
      skills: ['UI/UX Design', 'Web Development', 'Project Management'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2023',
      title: 'Design & Development',
      role: 'Game and Web Designer',
      description: 'Bridging the gap between design and development, creating seamless user experiences from concept to deployment.',
      skills: ['React', 'TypeScript', 'Python', 'Design Systems']
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2022',
      title: 'Creative Solutions',
      role: 'Junior Developer',
      description: 'Building responsive web applications and learning industry best practices in modern web development.',
      skills: ['JavaScript', 'HTML/CSS', 'Version Control'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-sm tracking-widest uppercase mb-6 text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.div>
        <motion.h2 
          className="mb-20 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/20 pb-16 last:border-0 hoverable"
              whileHover={{ x: 10 }}
            >
              <div className="lg:col-span-2">
                <motion.div 
                  className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent inline-block`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {exp.year}
                </motion.div>
              </div>
              <div className="lg:col-span-10">
                <h3 className="mb-2 text-white">
                  {exp.title}
                </h3>
                <div className="text-purple-300 mb-4 tracking-wide">
                  {exp.role}
                </div>
                <p className="text-purple-100 mb-6 max-w-3xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, i) => (
                    <motion.span 
                      key={i}
                      className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white text-sm tracking-wide rounded-full`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
