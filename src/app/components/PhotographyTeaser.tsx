import { photographs } from '../data/photography';
import { siteHref } from '../navigation';
export function PhotographyTeaser(){
  const preview=['Nature','Night','Candid'].map(category=>photographs.find(p=>p.category===category)).filter(Boolean);
  return <section className="photography-teaser" id="photography" aria-label="Photography preview"><div className="work-heading"><div><p className="mono-label">Outside the lab / photography</p><h2>Through my lens.</h2><p className="teaser-description">Landscapes, changing light, and everyday moments.</p></div><a className="text-action" href={siteHref('photography/')}>Explore photography <span aria-hidden="true">↗</span></a></div><div className="photo-preview-grid">{preview.map(photo=>photo&&<a key={photo.id} href={siteHref(`photography/#${photo.category.toLowerCase()}`)} data-cursor="view"><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async"/><span>{photo.category}<span aria-hidden="true">↗</span></span></a>)}</div></section>;
}
