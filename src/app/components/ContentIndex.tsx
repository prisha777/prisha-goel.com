import groups from '../data/journey.json';
import { projects } from '../data/projects';
import { siteHref } from '../navigation';
import { PageIntro } from './PageIntro';

const summaries: Record<string,string> = {
  'stanford-aimi':'Chest X-ray classification, lesion localization, and clinical usability.',
  'uci-gati':'First-author paper on AI and experimental mapping of allergy-related antibody binding.',
  'flood-vulnerability':'San Francisco neighborhood flood risk; Foothill symposium finalist.',
  ccir:'COVID-related public sentiment, irony, and errors in sentiment analysis.',
  'brown-biosensors':'Wearable sensor data, binge-drinking detection, and data reliability.',
  'inspirit-ai':'An educational chatbot that gives step-by-step learning guidance.',
  stem4others:'Chapter leadership, weekly Python and Java teaching, and student mentorship.',
  'induction-rocks':'Resident-focused web development and clean-cooking policy advocacy.',
  schoolhouse:'Four hours weekly of targeted practice, with written progress updates for families.',
  'stem-mentoring':'Design hands-on STEM and engineering lessons for middle school students.',
  'girls-who-code':'Peer mentoring in programming, data analysis, and web development.',
  'va-palo-alto':'Patient transport, appointment support, and clinic navigation.',
  'noaa-kinnu':'Marine conservation outreach and educational content.',
  dreamcatchers:'Early experience tutoring coding and STEM.',
  'hope-horizon-engin':'Robotics mentorship and English instruction for Ukrainian newcomers.',
  'climate-policy':'Youth climate advocacy and community education.',
  'saga-education':'Training in hands-on tutoring and classroom management.',
  'debate-athletics':'Public Forum debate, varsity speech and debate, and JV cross country.',
};
export function ContentIndex({category}:{category:'research'|'projects'|'experience'}) {
  const isResearch=category==='research';
  const projectSummaries=['A free educational platform built with a team of 5+ student developers.','A nonprofit website designed around information newly diagnosed families need.','','Collision detection, sound effects, and game physics.','A predator–prey ecosystem with population dynamics.','Word validation and keyboard-driven feedback.','A personal baking and recipe website.','Task and event planning for school.','JavaScript notes with local storage.','Enemy behaviors, scoring, and power-ups.','Planetary orbits and celestial mechanics.'];
  const entries=category==='projects'
    ? projects.map((project,index)=>({id:String(index+1),title:project.title,summary:projectSummaries[index],href:`projects/${index+1}/`})).filter(item=>item.id!=='3')
    : groups.flatMap(g=>g.cards).filter(c=>c.category===category && !['leebos','scientific-teen'].includes(c.id)).map(c=>({id:c.id,title:c.title,summary:summaries[c.id] || '',href:c.href}));
  return <>
    <PageIntro eyebrow={isResearch?'Healthcare · Biology · Climate':category==='projects'?'Software & development':'Teaching, leadership & service'} title={isResearch?'Research':category==='projects'?'Projects':'Experience'} description={isResearch?'Medical imaging, wearable sensors, allergy biology, and environmental data.':category==='projects'?'Software I’ve built for nonprofits, students, and my own learning.':'Teaching, student leadership, patient support, and climate advocacy.'} />
    <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
      {entries.map(entry=><a key={entry.id} href={siteHref(entry.href)} className="portfolio-card group bg-zinc-950 border border-zinc-800 rounded-lg p-6 hover:border-zinc-500 transition-colors"><h2 className="text-white text-lg mb-3">{entry.title}</h2><p className="text-zinc-300 text-sm leading-relaxed mb-5">{entry.summary}</p><span className="text-zinc-300 text-sm group-hover:text-white">{isResearch?'Research details':category==='projects'?'Project details':'Role details'} →</span></a>)}
    </div>
  </>;
}
