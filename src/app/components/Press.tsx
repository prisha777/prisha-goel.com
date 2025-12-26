import { motion } from 'motion/react';

export function Press() {
  const articles = [
    {
      title: 'STEM4Others - Mitchell Park Library Chapter',
      publication: 'STEM4Others',
      description: 'Leading a volunteer chapter dedicated to teaching coding, biology, and STEM subjects to under-resourced students. Organized 20+ volunteers and reached 200+ students through hands-on education.',
      link: 'https://www.stemforothers.org/schools/mitchell-park-library',
      date: '2024-2026',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Community STEM Education Initiative',
      publication: 'STEM4Others Programs',
      description: 'Developing comprehensive coding and biology lab curricula for middle and elementary school students, making STEM education accessible to all.',
      link: 'https://www.stemforothers.org/schools/mitchell-park-library',
      date: '2024-2025',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Volunteer Leadership & Impact',
      publication: 'STEM4Others Chapter Leadership',
      description: 'Coordinating programming competitions support and tutoring sessions, empowering the next generation of STEM leaders through dedicated mentorship.',
      link: 'https://www.stemforothers.org/schools/mitchell-park-library',
      date: '2024-2026',
      color: 'from-pink-500 to-orange-500',
    },
  ];

  return (
    <section id="press" className="py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-widest uppercase mb-4 text-indigo-400">
            Community Impact
          </div>
          <h2 className="text-white mb-6">
            STEM4Others{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-indigo-200 max-w-3xl mx-auto text-lg">
            Chapter President at Mitchell Park Library, dedicated to making STEM education accessible and empowering under-resourced students
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group hoverable block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-800/30 rounded-2xl p-8 h-full relative overflow-hidden group-hover:border-indigo-600/60 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Date & Publication */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${article.color} text-white uppercase tracking-wider`}>
                      {article.date}
                    </span>
                  </div>

                  {/* Publication Name */}
                  <div className="text-sm text-indigo-400 mb-3 uppercase tracking-wider">
                    {article.publication}
                  </div>

                  {/* Title */}
                  <h3 className="text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-indigo-200 leading-relaxed mb-6">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors">
                    <span className="text-sm uppercase tracking-wider">Learn More</span>
                    <motion.span
                      className="text-xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Decorative element */}
                <motion.div
                  className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${article.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://www.stemforothers.org/schools/mitchell-park-library"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm uppercase tracking-wider hoverable"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Visit STEM4Others Chapter
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
