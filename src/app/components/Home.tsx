import { PhotographyTeaser } from './PhotographyTeaser';
import portrait from '@/assets/portfolio/portrait.webp';
import { siteHref } from '../navigation';

const selectedWork = [
  {number:'01',label:'Stanford AIMI · Research',title:'Pneumonia detection from chest X-rays',text:'Image classification, lesion localization, and what makes a model useful to clinicians.',path:'research/stanford-aimi/',kind:'imaging'},
  {number:'02',label:'UCI × GATI BEAM · Published paper',title:'AI predictions need experimental evidence',text:'My first-author review of AI and experimental IgE epitope mapping.',path:'research/uci-gati/',kind:'paper'},
  {number:'03',label:'STEM4Others · Teaching',title:'From first programs to independent projects',text:'Weekly Python and Java classes at Mitchell Park Library, with students progressing to peer tutoring.',path:'experience/stem4others/',kind:'teaching'},
];

export function Home() {
  return <>
    <section className="black-hero">
      <div className="hero-copy">
        <p className="mono-label hero-intro">Prisha Goel <span>/</span> Palo Alto, California</p>
        <h1>Healthcare AI research.<br /><span>Free coding education.</span></h1>
        <p className="hero-description">I study how AI can help clinicians interpret medical data and teach Python and Java through STEM4Others. I’m a senior at Palo Alto Middle College, dual-enrolled at Foothill College.</p>
        <div className="hero-actions">
          <a className="metal-button" href="https://scienceyouth.org/web/viewer.php?id=352" target="_blank" rel="noopener noreferrer">Read my published paper <span aria-hidden="true">↗</span></a>
          <a className="text-action" href="mailto:goelprisha.07@gmail.com">Contact me <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-footnote"><span className="status-dot" aria-hidden="true" /> Research · Development · Teaching <span className="hero-year">Class of 2027</span></div>
      </div>
      <figure className="portrait-composition">
        <div className="portrait-grid" aria-hidden="true" />
        <span className="art-square square-one" aria-hidden="true" /><span className="art-square square-two" aria-hidden="true" /><span className="art-square square-three" aria-hidden="true" />
        <div className="portrait-image"><img src={portrait} alt="Prisha Goel" width="420" height="560" fetchPriority="high" /></div>
        <figcaption className="mono-label"><span>PG / 01</span><span>Research & education</span></figcaption>
      </figure>
    </section>
    <section className="work-section">
      <div className="work-heading"><div><p className="mono-label">Portfolio / selected work</p><h2>Research. Code. Community.</h2></div><a className="text-action" href={siteHref('projects/')}>All projects <span aria-hidden="true">↗</span></a></div>
      <div className="work-grid">
        {selectedWork.map(item=><a href={siteHref(item.path)} key={item.number} className={`work-card work-card-${item.kind}`}>
          <div className="work-visual" aria-hidden="true">
            {item.kind==='imaging' ? <div className="imaging-diagram"><div className="scan-frame"><i/><i/><i/><i/><span>+</span></div><div className="diagram-labels"><span>Classification</span><span>Localization</span><span>Clinical usability</span></div></div> : item.kind==='paper' ? <div className="paper-diagram"><div><small>01 / COMPUTATION</small><strong>AI prediction</strong></div><span>+</span><div><small>02 / VALIDATION</small><strong>Experimental evidence</strong></div></div> : <div className="teaching-diagram"><strong>30<span>+</span></strong><div><span>K–12 students</span><span>Weekly coding classes</span><code>Python / Java</code></div></div>}
          </div>
          <div className="work-card-copy"><p className="mono-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p><div className="work-card-bottom"><span>View {item.kind==='teaching'?'teaching work':'research'}</span><span className="arrow-box" aria-hidden="true">↗</span></div></div>
        </a>)}
      </div>
    </section>
    <PhotographyTeaser/>
    <section className="home-contact-strip"><p>For research, nonprofit development,<br />or a conversation about teaching.</p><a className="metal-button" href="mailto:goelprisha.07@gmail.com">Let’s get in touch <span aria-hidden="true">↗</span></a></section>
  </>;
}
