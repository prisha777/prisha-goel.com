import groups from '../data/journey.json';
import { projects } from '../data/projects';
import { siteHref } from '../navigation';
import { PageIntro } from './PageIntro';
import { ResearchMedia } from './ResearchMedia';
import tutoringEvidence from '@/assets/portfolio/schoolhouse-tutoring.webp';

export function PaperButton() {
  return <a href="https://scienceyouth.org/web/viewer.php?id=352" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-zinc-800 border border-zinc-600 text-white rounded-md text-sm hover:shadow-lg hover:shadow-white/5">Read published paper ↗</a>;
}
export function DetailPage({category,id}:{category:string;id:string}) {
  const item = groups.flatMap(group=>group.cards).find(card=>card.category===category && card.id===id);
  const project = category==='projects' ? projects[Number(id)-1] : undefined;
  if (!item && !project) return <><PageIntro eyebrow="404" title="Page not found" description="This page may have moved. Explore my research, projects, or experience using the navigation." /><div className="max-w-6xl px-6 mx-auto pb-24"><a href={siteHref()} className="text-white underline">Back to home →</a></div></>;
  const title=item?.title || project!.title;
  const description=item?.description || project!.description;
  const source = id==='scientific-teen' ? {label:'Read my Scientific Teen article',url:'https://www.thescientificteen.org/post/nasa-s-curiosity-rover-discovered-sulfur-on-mars-this-may-astonishing-scientists'} : id==='stem4others' ? {label:'Visit my STEM4Others chapter',url:'https://www.stemforothers.org/schools/mitchell-park-library'} : id==='induction-rocks' ? {label:'Read the coverage and my quote',url:siteHref('press/')} : id==='leebos' ? {label:'Visit Leebo’s Sickle Cell Support Group',url:'https://leeboscsg.org'} : null;
  return <>
    <PageIntro eyebrow={`${category} / ${item?.id?.replaceAll('-',' ') || 'selected project'}`} title={title} description="" />
    <div className="max-w-6xl mx-auto px-6 pb-24 space-y-10">
      <a href={siteHref(`${category}/`)} className="inline-block text-zinc-300 text-sm hover:text-white">← All {category === 'about' ? 'honors & education' : category}</a>
      <article className="bg-zinc-950 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 md:p-12 relative overflow-hidden">
        <h2 className="text-white text-2xl mb-6">{category==='research' ? 'Research contribution' : 'Role & contribution'}</h2>
        <p className="text-zinc-300 leading-relaxed text-lg max-w-4xl">{description}</p>
        {id==='uci-gati' && <div className="mt-8"><PaperButton /></div>}
        {id==='stem4others' && <p className="mt-6 text-zinc-300">For the platform development work, see <a className="text-zinc-300 underline" href={siteHref('projects/1/')}>Stemplore →</a></p>}
        {source && <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-6 py-3 rounded-md bg-zinc-800 border border-zinc-600 text-white text-sm">{source.label} ↗</a>}
        {project && <div className="mt-8 flex flex-wrap gap-3 items-center"><a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md bg-zinc-800 border border-zinc-600 text-white text-sm">{project.type ? 'View on GitHub' : project.title.includes('Flood') ? 'Watch research spotlight' : 'Visit project'} ↗</a><div className="flex flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">{tag}</span>)}</div></div>}
      </article>
      {id==='schoolhouse' && <figure className="evidence-figure"><img src={tutoringEvidence} alt="Prisha’s Schoolhouse tutoring dashboard showing SAT Math and Reading & Writing bootcamp series in 2026" loading="lazy" width="1600" height="769" /><figcaption>Schoolhouse.world · My SAT Math and Reading & Writing bootcamp series, 2026. <a href={tutoringEvidence} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">View full-size screenshot ↗</a></figcaption></figure>}
      {id==='flood-vulnerability' && <ResearchMedia />}

    </div>
  </>;
}
