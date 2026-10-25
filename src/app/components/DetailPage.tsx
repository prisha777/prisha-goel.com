import groups from '../data/journey.json';
import { projects } from '../data/projects';
import { siteHref } from '../navigation';
import { PageIntro } from './PageIntro';
import { ResearchMedia } from './ResearchMedia';

export const paperPath = 'papers/prisha-goel-ige-epitope-mapping.pdf';
export function PaperButton() {
  return <a href="https://scienceyouth.org/web/viewer.php?id=352" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm hover:shadow-lg hover:shadow-purple-600/20">Read published paper ↗</a>;
}
export function DetailPage({category,id}:{category:string;id:string}) {
  const item = groups.flatMap(group=>group.cards).find(card=>card.category===category && card.id===id);
  const project = category==='projects' ? projects[Number(id)-1] : undefined;
  if (!item && !project) return <><PageIntro eyebrow="404" title="Page not found" description="This page may have moved. Explore my research, projects, or experience using the navigation." /><div className="max-w-6xl px-6 mx-auto pb-24"><a href={siteHref()} className="text-pink-300 underline">Back to home →</a></div></>;
  const title=item?.title || project!.title;
  const description=item?.description || project!.description;
  const source = id==='scientific-teen' ? {label:'Read my Scientific Teen article',url:'https://www.thescientificteen.org/post/nasa-s-curiosity-rover-discovered-sulfur-on-mars-this-may-astonishing-scientists'} : id==='stem4others' ? {label:'Visit my STEM4Others chapter',url:'https://www.stemforothers.org/schools/mitchell-park-library'} : id==='induction-rocks' ? {label:'Read the Canary Media feature',url:'https://www.canarymedia.com/articles/electrification/palo-alto-kids-induction-stoves'} : id==='leebos' ? {label:'Visit Leebo’s Sickle Cell Support Group',url:'https://leeboscsg.org'} : null;
  return <>
    <PageIntro eyebrow={`${category} / ${item?.id?.replaceAll('-',' ') || 'selected project'}`} title={title} description={category==='research' ? 'Research grounded in evidence, with people at the center.' : 'A closer look at the work.'} />
    <div className="max-w-6xl mx-auto px-6 pb-24 space-y-10">
      <a href={siteHref(`${category}/`)} className="inline-block text-purple-300 text-sm hover:text-pink-300">← All {category === 'about' ? 'honors & education' : category}</a>
      <article className="bg-slate-900/50 backdrop-blur-sm border border-indigo-800/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="text-5xl mb-6" aria-hidden="true">{item?.icon || '⌘'}</div>
        <h2 className="text-white text-2xl mb-6">{category==='research' ? 'Research overview' : 'What I do'}</h2>
        <p className="text-indigo-200 leading-relaxed text-lg max-w-4xl">{description}</p>
        {id==='uci-gati' && <div className="mt-8"><PaperButton /><p className="text-indigo-300 text-sm mt-4">From Sensitization to Molecular Mechanism: Why AI Must Complement Experimental IgE Epitope Mapping · Prisha Goel · UCI × GATI BEAM</p></div>}
        {source && <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm">{source.label} ↗</a>}
        {project && <div className="mt-8 flex flex-wrap gap-3 items-center"><a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm">{project.type ? 'View on GitHub' : project.title.includes('Flood') ? 'Watch research spotlight' : 'Visit project'} ↗</a><div className="flex flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="px-3 py-1 rounded-full bg-slate-800 border border-purple-800/30 text-purple-300 text-xs">{tag}</span>)}</div></div>}
      </article>
      {(id==='flood-vulnerability' || id==='ccir' || (category==='projects' && id==='3')) && <ResearchMedia />}
      {id==='uci-gati' && <div className="rounded-2xl overflow-hidden border border-indigo-800/30 bg-slate-900/50 p-6 md:p-8"><h2 className="text-white text-xl mb-5">Inside the paper</h2><p className="text-indigo-200 leading-relaxed mb-6">My literature review explores why AI predictions of IgE-binding epitopes need experimental validation. The central question is how computational approaches can complement evidence from the lab.</p><a href={siteHref(paperPath)} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden bg-white"><img src={siteHref('media/uci-paper-preview.jpg')} alt="Title page of Prisha Goel’s UCI × GATI BEAM paper" className="w-full max-w-2xl mx-auto" loading="lazy" /></a></div>}
      {project?.image && <figure className="rounded-2xl border border-indigo-800/30 overflow-hidden"><img src={project.image} alt={`${project.title} project preview`} className="w-full max-h-[500px] object-cover" loading="lazy" /><figcaption className="p-4 text-sm text-indigo-300">{project.type === 'solar' ? 'Illustrative image from Unsplash; the project link opens the original work.' : 'Project screenshot from my local portfolio assets.'}</figcaption></figure>}
    </div>
  </>;
}
