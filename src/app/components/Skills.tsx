import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Design',
      skills: ['UI/UX Design', 'Visual Design', 'Prototyping', 'Design Systems', 'Figma', 'Adobe Creative Suite'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Tools & Methods',
      skills: ['Git', 'Agile', 'Design Thinking', 'User Research', 'Responsive Design', 'Accessibility'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-sm tracking-widest uppercase mb-6 text-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Expertise
        </motion.div>
        <motion.h2 
          className="mb-20 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Skills & Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="hoverable relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br opacity-0 rounded-lg blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-purple-200">
                <motion.h3 
                  className={`mb-8 pb-4 border-b-4 border-gradient-to-r ${category.color} bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.category}
                </motion.h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-700 tracking-wide flex items-center hover:text-purple-600 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.span
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}
                        whileHover={{ scale: 1.5 }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}