import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Journey() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'My Journey';
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

  const journeyData = [
    {
        "period": "2026–2027 (Senior Year)",
        "status": "Continuing",
        "focus": "Palo Alto Middle College · Foothill College · Teaching, Development & Advocacy",
        "color": "from-purple-500 to-pink-500",
        "cards": [
            {
                "title": "STEM4Others – Chapter President, Tutor & App Developer",
                "description": "January 2023–Present · Continue leading the Palo Alto chapter, teaching weekly Python and Java sessions for 30+ K–12 students at Mitchell Park Library. Lead 5+ student developers building Stemplore, a free educational platform.",
                "icon": "🎓"
            },
            {
                "title": "Induction Rocks – Policy & Web Development Intern",
                "description": "2025–Present · Build and maintain the task force’s website around residents’ questions about rebates, electrical requirements, and cooktop lending. Give public comment at Palo Alto City Council meetings and help residents access cleaner cooking. Featured in Canary Media in April 2026.",
                "icon": "🌍"
            },
            {
                "title": "Schoolhouse.world – Certified SAT Tutor",
                "description": "2024–Present · Teach four hours weekly of SAT Math and Reading & Writing. Create targeted practice in algebra, data analysis, grammar, and evidence-based reading, with written progress summaries for families.",
                "icon": "📐"
            },
            {
                "title": "Pathwise · Imagineerz Learning · Code for Fun",
                "description": "August 2023–Present · Continue mentoring and teaching STEM and engineering through inquiry-driven activities. Design problems with accessible starting points and stretch goals, and co-develop modules with program leadership.",
                "icon": "🤝"
            },
            {
                "title": "Girls Who Code – Program Scholar & Peer Educator",
                "description": "June 2025–Present · Peer-mentor scholars in Python, data analysis, and web development. Certified in Python, AI/ML, Data Science, Cybersecurity, HTML/CSS, and Web Design; recognized for the cohort’s highest-ranked policy proposition.",
                "icon": "💻"
            },
            {
                "title": "VA Palo Alto Health Care System – Volunteer",
                "description": "2023–Present · Support patients with transport, appointment rescheduling, and clinic navigation. Continue contributing to community service alongside teaching and research, with 300+ volunteer hours across activities.",
                "icon": "💜"
            },
            {
                "title": "NOAA – Ambassador · Kinnu – Content Creator",
                "description": "2023–Present · Continue marine conservation outreach as a NOAA ambassador and create SAT and STEM educational content for Kinnu.",
                "icon": "🌊"
            },
            {
                "title": "Foothill College – Dual Enrollment",
                "description": "2025–Present · Study computer science, mathematics, physics, and engineering alongside high school coursework. Earned a 3.84 GPA and Dean’s List, First Honors in two quarters; expected high school graduation: June 2027.",
                "icon": "📚"
            }
        ]
    },
    {
        "period": "2026 Research",
        "status": "Research & Presentations",
        "focus": "Medical Imaging, Biology, Climate Vulnerability & Natural Language Processing",
        "color": "from-blue-500 to-cyan-500",
        "cards": [
            {
                "title": "Stanford AIMI – Summer Research Intern",
                "description": "Summer 2026 · Researched pneumonia diagnosis from chest radiographs using classification, object detection, segmentation, and multimodal vision-language models. Explored fairness and clinical deployment, including why accurate classification alone does not give radiologists lesion localization.",
                "icon": "🩻"
            },
            {
                "title": "UC Irvine · GATI BEAM – Student Researcher",
                "description": "Summer 2026 · First author of “From Sensitization to Molecular Mechanism: Why AI Must Complement Experimental IgE Epitope Mapping,” mentored by Dr. Delisha Patel. Completed a robotics project and coursework with Prof. David Reinkensmeyer, connecting AI and experimental evidence with assistive technology.",
                "icon": "🧬"
            },
            {
                "title": "Foothill College – Independent Flood Vulnerability Research",
                "description": "May 2026 · Combined geographic and socioeconomic data to map flood vulnerability across San Francisco neighborhoods. Examined how gaps in historical records can obscure risk. Independently designed the project under Prof. Dan Kauffman and presented it as a Research & Service Leadership Symposium finalist.",
                "icon": "🗺️"
            },
            {
                "title": "Cambridge Centre for International Research – Student Researcher",
                "description": "2026 · Worked with Daniel Ebanks to analyze COVID-related public sentiment in Twitter data. Investigated failures on irony and tone, where sentiment polarity could invert meaning despite confident predictions. Also presented flood vulnerability research in a CCIR Student Spotlight.",
                "icon": "🔎"
            }
        ]
    },
    {
        "period": "2025 Research & Development",
        "status": "Completed Projects",
        "focus": "Biosensors, AI for Learning & Nonprofit Technology",
        "color": "from-pink-500 to-orange-500",
        "cards": [
            {
                "title": "Brown University – Data Science Research Intern",
                "description": "July–August 2025 · Built machine-learning biosensor software with Prof. Nathan Didier to detect binge-drinking episodes from wearable data. Wrote preprocessing and feature-engineering pipelines and investigated how device non-wear and hardware faults affect data reliability.",
                "icon": "🔬"
            },
            {
                "title": "Inspirit AI – AI/ML Summer Intern",
                "description": "Summer 2025 · Fine-tuned an educational chatbot using a retrieval-augmented generation pipeline. Engineered prompts for step-by-step academic guidance that builds understanding rather than simply supplying answers.",
                "icon": "🤖"
            },
            {
                "title": "Leebo’s Sickle Cell Support Group – Development Intern",
                "description": "2025 · Independently designed and built the nonprofit’s website, prioritizing information for newly diagnosed families. Contributed through a website and iOS development internship.",
                "icon": "🛠️"
            }
        ]
    },
    {
        "period": "Leadership Foundations & Activities",
        "status": "Experience",
        "focus": "Mentorship, Communication, Science Writing & Athletics",
        "color": "from-purple-500 to-pink-500",
        "cards": [
            {
                "title": "STEM4Others & Dreamcatchers",
                "description": "Tutored middle and elementary school students in coding and STEM and assisted local teams in programming competitions. Continue building on these teaching foundations through chapter leadership and weekly tutoring.",
                "icon": "💻"
            },
            {
                "title": "Hope Horizon & Engin – Volunteer Work",
                "description": "Mentored youth in robotics and taught English to Ukrainian newcomers, building connections through patient, accessible explanations.",
                "icon": "🤝"
            },
            {
                "title": "Climate Policy Engagement – CCVL",
                "description": "Participated in youth advocacy, letter-writing campaigns, and community education. Continue climate and health advocacy through Induction Rocks.",
                "icon": "📢"
            },
            {
                "title": "The Scientific Teen – Science Writer",
                "description": "Published a science article on the Curiosity rover, sharing space exploration with a young audience.",
                "icon": "✍️"
            },
            {
                "title": "Saga Education – Math Fellow Certificate",
                "description": "Developed hands-on tutoring and classroom management skills for supporting students in high-need schools.",
                "icon": "📐"
            },
            {
                "title": "Speech, Debate & Cross Country",
                "description": "Two years of Gunn Varsity Public Forum debate, including Berkeley and Stanford tournaments; Foothill Owl Varsity Speech & Debate; and junior varsity cross country.",
                "icon": "🎤"
            }
        ]
    },
    {
        "period": "Honors & Recognition",
        "status": "Awards",
        "focus": "Research, Programming, Academic Achievement & Service",
        "color": "from-blue-500 to-cyan-500",
        "cards": [
            {
                "title": "Research & Service Leadership Symposium – Finalist",
                "description": "2026 · Recognized for independent flood vulnerability research at Foothill College, presented to a public audience and faculty judging panel.",
                "icon": "🏅"
            },
            {
                "title": "Stanford ProCo – Programming Awards",
                "description": "2025–2026 · 1st Place as a solo competitor in the individual competition and 4th Place in the Advanced Division team competition, hosted by Stanford ACM.",
                "icon": "🏆"
            },
            {
                "title": "President’s Volunteer Service Award – Gold",
                "description": "2024 · Recognized for 250+ volunteer hours in one year. Continue serving the community through education, mentorship, and patient support.",
                "icon": "💛"
            },
            {
                "title": "Foothill College – Dean’s List, First Honors",
                "description": "Earned First Honors in two quarters while pursuing college coursework alongside high school.",
                "icon": "🎓"
            }
        ]
    }
];

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
            My continuing work as a senior, recent research experiences, and the teaching, service, and advocacy that connect them.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="space-y-24" ref={containerRef}>
          {journeyData.map((period, periodIndex) => (
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
            {card.title}
          </h4>
          <p className="text-indigo-200 leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Decorative element */}
        <motion.div
          className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </motion.div>
    </motion.div>
  );
}
