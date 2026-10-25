import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import journeyData from '../data/journey.json';
import { siteHref } from '../navigation';

export function Journey({ category = 'experience' }: { category?: 'research' | 'experience' | 'about' | 'community' }) {
  const [typedText, setTypedText] = useState('');
  const fullText = category === 'research' ? 'Research' : category === 'about' ? 'Honors & Education' : category === 'community' ? 'Teaching & Service' : 'Experience';
  const containerRef = useRef<HTMLDivElement>(null);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);



  return (
    <section id="journey" className="py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-widest uppercase mb-4 text-indigo-400">
            Professional Development
          </div>
          <h2 className="text-white mb-6 min-h-[1.2em]">
            {typedText}
            <motion.span
              className="inline-block w-1 h-12 bg-purple-500 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </h2>
          <p className="text-indigo-200 max-w-3xl mx-auto">
            {category === 'research' ? 'Exploring how AI, data, and experimental evidence can make technology more useful to people.' : category === 'about' ? 'Learning, service, and the recognition along the way.' : 'Continuing leadership, teaching, development, and advocacy — alongside the experiences that shaped them.'}
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="space-y-24" ref={containerRef}>
          {journeyData.map(period => ({ ...period, cards: period.cards.filter(card => category === 'community' ? ['stem4others', 'schoolhouse', 'stem-mentoring', 'va-palo-alto', 'noaa-kinnu', 'girls-who-code'].includes(card.id) : card.category === category) })).filter(period => period.cards.length > 0).map((period, periodIndex) => (
            <div key={periodIndex}>
              {/* Period Header */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`px-4 py-2 bg-gradient-to-r ${period.color} text-white text-sm uppercase tracking-wider rounded-full`}>
                    {period.status}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
                </div>
                <h3 className="text-white mb-2">{period.period}</h3>
                <p className={`text-lg bg-gradient-to-r ${period.color} bg-clip-text text-transparent font-semibold`}>
                  {period.focus}
                </p>
              </motion.div>

              {/* Parallax Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {period.cards.map((card, cardIndex) => (
                  <ParallaxCard
                    key={cardIndex}
                    card={card}
                    color={period.color}
                    index={cardIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Parallax Card Component
function ParallaxCard({ card, color, index }: { card: any; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="hoverable group"
    >
      <motion.div
        className="bg-slate-900/50 backdrop-blur-sm border border-indigo-800/30 rounded-2xl p-8 h-full relative overflow-hidden"
        whileHover={{ y: -10, borderColor: 'rgba(99, 102, 241, 0.6)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Icon */}
        <div className="text-5xl mb-4 relative z-10">{card.icon}</div>

        {/* Content */}
        <div className="relative z-10">
          <h4 className="text-white mb-4 group-hover:text-indigo-300 transition-colors">
            <a href={siteHref(card.href)} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-purple-400">{card.title}</a>
          </h4>
          <p className="text-indigo-200 leading-relaxed">
            {card.description}
          </p>
          <div className="text-purple-400 text-sm uppercase tracking-wider mt-6">View details →</div>
        </div>

        {/* Decorative element */}
        <motion.div
          className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </motion.div>
    </motion.div>
  );
}
