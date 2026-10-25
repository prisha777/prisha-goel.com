import { useEffect, useRef, useState } from 'react';
import { photographs, photoCollections } from '../data/photography';
export function PhotographyPage(){
  const [selected,setSelected]=useState<number|null>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  const photo=selected===null?null:photographs[selected];
  useEffect(()=>{
    if(selected!==null&&!dialog.current?.open){dialog.current?.showModal();document.body.style.overflow='hidden';}
  },[selected]);
  useEffect(()=>()=>{document.body.style.overflow='';},[]);
  const close=()=>{dialog.current?.close();setSelected(null);document.body.style.overflow='';};
  const step=(direction:number)=>setSelected(index=>index===null?null:(index+direction+photographs.length)%photographs.length);
  return <div className="photography-page">
    <header className="photography-intro"><p className="mono-label">Photography / Prisha Goel</p><h1>Through my lens.</h1><p>Landscapes, changing light, and everyday moments.</p></header>
    <nav className="collection-nav" aria-label="Photography collections">{photoCollections.map(collection=><a key={collection.name} href={`#${collection.name.toLowerCase()}`}>{collection.name}<span>{String(photographs.filter(p=>p.category===collection.name).length).padStart(2,'0')}</span></a>)}</nav>
    {photoCollections.map((collection,index)=>{
      const photos=photographs.filter(p=>p.category===collection.name);
      return <section className="photo-collection" id={collection.name.toLowerCase()} key={collection.name} aria-labelledby={`heading-${index}`}>
        <div className="photo-section-heading"><div><p className="mono-label">Collection / 0{index+1}</p><h2 id={`heading-${index}`}>{collection.name}</h2></div><p>{collection.description}</p></div>
        {photos.length?<div className="photo-grid">{photos.map(p=><figure className="photo-tile" key={p.id}><button data-cursor="view" aria-label={`Enlarge ${p.title}`} onClick={()=>setSelected(photographs.indexOf(p))}><img src={p.src} srcSet={p.width>800?`${p.src} 800w, ${p.large} ${Math.min(p.width,1600)}w`:undefined} sizes="(max-width: 650px) 100vw, 50vw" width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async"/><span className="photo-enlarge" aria-hidden="true">↗</span></button><figcaption><span>{p.title}</span><span>{p.category}</span></figcaption></figure>)}</div>:<p className="collection-pending">A selection is being curated for this collection.</p>}
      </section>;
    })}
    <a href="#main-content" className="text-action back-to-top">Back to top ↑</a>
    <dialog ref={dialog} className="photo-lightbox" aria-label="Photograph viewer" onCancel={event=>{event.preventDefault();close();}} onClose={()=>{setSelected(null);document.body.style.overflow='';}} onKeyDown={event=>{if(event.key==='ArrowRight'){event.preventDefault();step(1);}if(event.key==='ArrowLeft'){event.preventDefault();step(-1);}}}>
      <div className="lightbox-top"><p className="mono-label">Photography / {photo?.category}</p><button autoFocus onClick={close} aria-label="Close photograph">Close ×</button></div>
      {photo&&<figure><img src={photo.large} width={photo.width} height={photo.height} alt={photo.alt}/><figcaption aria-live="polite"><span>{photo.title}</span><span>{selected!+1} / {photographs.length}</span></figcaption></figure>}
      <div className="lightbox-controls"><button onClick={()=>step(-1)}>← Previous</button><span className="mono-label">Arrow keys to browse · Esc to close</span><button onClick={()=>step(1)}>Next →</button></div>
    </dialog>
  </div>;
}
