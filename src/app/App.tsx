import { useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Press } from './components/Press';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PageIntro } from './components/PageIntro';
import { DetailPage, PaperButton } from './components/DetailPage';
import { ResearchMedia } from './components/ResearchMedia';
import { MediaLinks } from './components/MediaLinks';
import { basePath, siteHref } from './navigation';
import mountains from '@/assets/portfolio/mountains.jpg';

export default function App() {
  const path = window.location.pathname.startsWith(basePath) ? window.location.pathname.slice(basePath.length) : window.location.pathname.slice(1);
  const [page='',id] = path.replace(/index\.html$/, '').split('/').filter(Boolean);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.title = page ? `${document.querySelector('h1')?.textContent || page} | Prisha Goel` : 'Prisha Goel — Research, Code & Community';
  }, [page]);
  let content;
  if(id) content=<DetailPage category={page} id={id} />;
  else switch(page) {
    case '': content=<Home />; break;
    case 'about': content=<><PageIntro eyebrow="A little about me" title="Curiosity, with a purpose." description="Senior at Palo Alto Middle College. Dual-enrolled at Foothill. Always looking for the next good question." /><About /><figure className="max-w-6xl px-6 mx-auto py-16"><img src={mountains} alt="Prisha outdoors with a mountain landscape" className="rounded-2xl w-full max-h-[600px] object-cover" loading="lazy" /><figcaption className="text-purple-300 text-sm mt-4">Outside of code: fresh air, new places, and a little perspective.</figcaption></figure><Journey category="about" /></>; break;
    case 'research': content=<><PageIntro eyebrow="AI · Biology · Climate" title="Research" description="I’m interested in the gap between a model that produces an answer and a tool people can actually use." /><div className="max-w-6xl mx-auto px-6 pb-12"><div className="rounded-2xl p-8 border border-purple-800/30 bg-slate-900/50"><p className="text-purple-400 uppercase tracking-widest text-xs mb-3">Featured paper · UCI × GATI BEAM</p><h2 className="text-white text-2xl mb-6">From Sensitization to Molecular Mechanism</h2><div className="flex flex-wrap gap-5 items-center"><PaperButton /><a href={siteHref('research/uci-gati/')} className="text-purple-300 text-sm">About the research →</a></div></div></div><Journey category="research" /><div className="max-w-6xl mx-auto px-6 pb-24"><ResearchMedia /></div></>; break;
    case 'projects': content=<><PageIntro eyebrow="Build · Explore · Share" title="Projects" description="Community platforms, climate data, educational tools, and creative experiments. Each project has its own page." /><Projects /></>; break;
    case 'experience': content=<><PageIntro eyebrow="Work & leadership" title="Experience" description="Continuing roles in teaching, development, service, and advocacy, alongside the experiences that shaped my work." /><Journey category="experience" /></>; break;
    case 'community': content=<><PageIntro eyebrow="Teaching · Mentorship · Service" title="Community" description="Helping someone take their next step — whether that’s writing their first program, preparing for the SAT, or finding support." /><Journey category="community" /><Press mode="community" /></>; break;
    case 'press': content=<><PageIntro eyebrow="In the news" title="Press & media" description="Conversations about science, community, and turning information into action." /><Press mode="press" /><MediaLinks /></>; break;
    case 'gallery': content=<><PageIntro eyebrow="A visual notebook" title="Gallery" description="A few snapshots of life, alongside the projects I’ve been building." /><figure className="max-w-6xl mx-auto px-6 pb-12"><img src={mountains} alt="Prisha exploring a mountain landscape" className="rounded-2xl w-full max-h-[560px] object-cover" loading="lazy" /></figure><Gallery /></>; break;
    case 'contact': content=<><PageIntro eyebrow="Say hello" title="Let’s connect." description="Research, community projects, teaching, or just a good conversation — I’d love to hear from you." /><Contact /></>; break;
    default: content=<DetailPage category="missing" id="missing" />;
  }
  return <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-x-hidden ${page ? 'portfolio-page' : ''}`}><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content">{content}</main><Footer /></div>;
}
