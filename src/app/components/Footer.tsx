import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-r from-purple-950 via-indigo-950 to-blue-950 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-purple-300">
            © {new Date().getFullYear()} Prisha Goel. All rights reserved.
          </div>
          <div className="flex gap-8">
            <motion.a 
              href="https://www.linkedin.com/in/prisha-goel-118421287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wide text-purple-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/prisha777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wide text-purple-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="mailto:goelprisha.07@gmail.com"
              className="text-sm uppercase tracking-wide text-purple-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}