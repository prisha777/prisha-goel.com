import { ResearchMedia } from './ResearchMedia';
export function MediaLinks() {
  return <section className="max-w-6xl mx-auto px-6 pb-24"><h2 className="text-white text-2xl mb-8">Writing & conversations</h2><div className="grid md:grid-cols-2 gap-8 items-start">
    <ResearchMedia />
    <a href="https://www.thescientificteen.org/post/nasa-s-curiosity-rover-discovered-sulfur-on-mars-this-may-astonishing-scientists" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-indigo-800/30 bg-slate-900/50 overflow-hidden hover:border-indigo-600/60 transition-colors">
      <img src="https://static.wixstatic.com/media/24b06d_46ea08838db24f23b5fd9972edef119b~mv2.png" alt="Sulfur crystals on Mars, as pictured in my Scientific Teen article" loading="lazy" className="w-full aspect-video object-cover" />
      <div className="p-6"><p className="text-xs uppercase tracking-widest text-purple-400 mb-3">The Scientific Teen · September 30, 2024</p><h3 className="text-white text-xl mb-4">Curiosity’s sulfur discovery on Mars</h3><p className="text-indigo-200 text-sm leading-relaxed mb-6">My article on a surprising discovery by NASA’s Curiosity rover and the questions it raises about Mars.</p><span className="text-purple-300 text-sm group-hover:text-pink-300">Read my article ↗</span><p className="text-indigo-400 text-xs mt-4">Image via The Scientific Teen</p></div>
    </a>
  </div></section>;
}
