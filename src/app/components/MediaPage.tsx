import { PageIntro } from './PageIntro';
import { siteHref } from '../navigation';
export function MediaPage() {
  return <>
    <PageIntro eyebrow="Reporting, writing & interviews" title="Writing & media" description="My published science writing, a research interview, and coverage of our clean-cooking advocacy." />
    <div className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
      <article className="rounded-lg border border-zinc-700 bg-zinc-950 p-7 md:p-10"><p className="text-zinc-300 text-xs uppercase tracking-widest mb-5">Canary Media · April 6, 2026</p><h2 className="text-white text-2xl mb-6">Youth advocacy for induction cooking in Palo Alto</h2><blockquote className="text-white text-2xl md:text-3xl leading-relaxed max-w-3xl mb-5">“We’re not telling people that they <span className="text-white">have to switch.</span>”</blockquote><p className="text-zinc-400 mb-6">— Prisha Goel, on sharing science with residents through Induction Rocks</p><a href="https://www.canarymedia.com/articles/electrification/palo-alto-kids-induction-stoves" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline underline-offset-4">Read the Canary Media feature ↗</a></article>
      <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-7"><p className="text-zinc-300 text-xs uppercase tracking-widest mb-4">The Scientific Teen · September 30, 2024</p><h2 className="text-white text-xl mb-4">Curiosity’s sulfur discovery on Mars</h2><p className="text-zinc-300 mb-5 leading-relaxed">My article explains a discovery by NASA’s Curiosity rover and the questions it raises about Mars.</p><a href="https://www.thescientificteen.org/post/nasa-s-curiosity-rover-discovered-sulfur-on-mars-this-may-astonishing-scientists" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline underline-offset-4">Read my article ↗</a></article>
      <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-7"><p className="text-zinc-300 text-xs uppercase tracking-widest mb-4">CCIR Student Spotlight</p><h2 className="text-white text-xl mb-4">Discussing San Francisco flood vulnerability</h2><a href={siteHref('research/flood-vulnerability/')} className="text-zinc-200 underline underline-offset-4">Watch the interview on the research page →</a></article>
    </div>
  </>;
}
