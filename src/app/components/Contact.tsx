import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="text-sm tracking-widest uppercase mb-6 text-purple-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.div>
          <motion.h2 
            className="mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create something{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              exceptional
            </span>{' '}
            together
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hello, feel free to reach out.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="mailto:goelprisha.07@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white uppercase tracking-widest text-sm rounded-full relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Send Email</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/prisha-goel-118421287/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white uppercase tracking-widest text-sm rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/prisha777"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white uppercase tracking-widest text-sm rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Email', value: 'goelprisha.07@gmail.com' },
              { label: 'LinkedIn', value: 'Prisha Goel' },
              { label: 'GitHub', value: 'prisha777' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="hoverable"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-sm tracking-widest uppercase mb-2 text-purple-300">
                  {item.label}
                </div>
                <div className="text-white">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}