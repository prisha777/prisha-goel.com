import { motion } from 'motion/react';

export function Press({ mode = 'press' }: { mode?: 'press' | 'community' }) {
  const articles = [
    {
      title: 'STEM4Others - Mitchell Park Library Chapter',
      publication: 'STEM4Others',
      description: 'Continue leading the Palo Alto chapter and teaching weekly Python and Java sessions for 30+ K–12 students. Build a reusable, multi-level curriculum that helps students progress to independent projects.',
      link: 'https://www.stemforothers.org/schools/mitchell-park-library',
      date: '2023–Present',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Community STEM Education Initiative',
      publication: 'STEM4Others Programs',
      description: 'Continue developing hands-on STEM curricula and leading 5+ student developers building Stemplore, a free educational platform for accessible learning.',
      link: 'https://www.stemforothers.org/schools/mitchell-park-library',
      date: 'Ongoing',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Volunteer Leadership & Impact',
      publication: 'STEM4Others Chapter Leadership',
      description: 'Support students as they complete independent projects, join school STEM clubs, and begin tutoring younger learners. Continue coordinating volunteers and mentoring the next generation of STEM leaders.',
      link: 'https://www.stemforothers.org/schools/mitchell-park-library',
      date: '2023–Present',
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
            Community &amp; Press
          </div>
          <h2 className="text-white mb-6">
            Public{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-indigo-200 max-w-3xl mx-auto text-lg">
            Making STEM education accessible, building tools for communities, and sharing science that helps people make informed choices.
          </p>
        </motion.div>

        {/* Featured press card reuses the existing glass, border, gradient and hover styles. */}
        {mode === 'press' && <motion.a
          href="https://www.canarymedia.com/articles/electrification/palo-alto-kids-induction-stoves"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read Prisha Goel’s quote and the Induction Rocks story in Canary Media (opens in a new tab)"
          className="group hoverable block mb-12 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <article className="bg-slate-900/50 backdrop-blur-sm border border-indigo-800/30 rounded-2xl p-6 md:p-8 relative overflow-hidden group-hover:border-indigo-600/60 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="rounded-lg border border-purple-800/30 overflow-hidden bg-slate-950/70">
                <div className="px-6 py-4 border-b border-indigo-800/30 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm uppercase tracking-widest text-indigo-300">Canary Media</span>
                  <span className="text-xs text-purple-300">Article preview ↗</span>
                </div>
                <img src="https://img.canarymedia.com/content/uploads/Electra-induction-stove.jpeg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=501&q=80&s=ca4839a5de12022939d5bf568349815a&w=864" alt="Induction cooktop pictured in the Canary Media article" loading="lazy" className="w-full aspect-video object-cover" />
                <p className="px-6 pt-3 text-xs text-indigo-300">Image: Electra, via Canary Media</p>
                <div className="p-6 md:p-8">
                  <div className="text-xs uppercase tracking-wider text-purple-400 mb-4">Electrification · April 6, 2026</div>
                  <h3 className="text-white text-2xl md:text-3xl leading-snug mb-6">
                    These Palo Alto kids are pushing the city to promote induction stoves
                  </h3>
                  <p className="text-indigo-200 text-sm leading-relaxed mb-6">
                    A look at Induction Rocks and our work to help Palo Alto residents understand cleaner cooking, health, and electrification.
                  </p>
                  <div className="text-xs text-indigo-400 border-t border-indigo-800/30 pt-4">Reporting by Alison F. Takemura</div>
                </div>
              </div>
              <div>
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white uppercase tracking-wider mb-6">In the news</span>
                <div aria-hidden="true" className="text-6xl leading-none text-purple-400 mb-2">“</div>
                <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-6">
                  We’re not telling people that they <mark className="bg-transparent text-pink-300">have to switch.</mark>
                </blockquote>
                <p className="text-indigo-300 mb-6">— Prisha Goel, quoted in Canary Media</p>
                <p className="text-indigo-200 leading-relaxed mb-8">
                  Through my continuing policy and web development work with Induction Rocks, I help make the science and practical steps behind healthier homes easier to access.
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors">
                  <span className="text-sm uppercase tracking-wider">Read the story</span>
                  <span aria-hidden="true" className="text-xl">→</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20" />
          </article>
        </motion.a>}

        {/* Articles Grid */}
        {mode === 'community' && <>
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
        </>}
      </div>
    </section>
  );
}
