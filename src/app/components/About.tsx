import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-sm tracking-widest uppercase mb-6 text-purple-600">
            About Me
          </div>
          <h2 className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Exploring AI through a multidisciplinary lens
          </h2>
          <div className="space-y-6 text-gray-700">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a high school student passionate about exploring how AI intersects with 
              biology, healthcare, and climate science. I love diving into projects that 
              combine different fields to solve real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Whether I'm coding games, leading STEM workshops at my local library, or 
              researching biosensors at Brown, I'm always learning something new and trying 
              to make an impact in my community.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I believe the coolest innovations happen when you bring together different 
              perspectives—that's why I'm excited about the future of AI and its potential 
              to tackle challenges in healthcare, climate, and beyond.
            </motion.p>
          </div>
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { num: '15+', label: 'Projects' },
              { num: '3+', label: 'Years' },
              { num: '100%', label: 'Dedication' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="hoverable relative p-4 rounded-lg bg-white/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                  {stat.num}
                </div>
                <div className="text-sm uppercase tracking-wide text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}