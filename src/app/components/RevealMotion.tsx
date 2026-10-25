import { useEffect } from 'react';
export function RevealMotion(){
  useEffect(()=>{
    const query=matchMedia('(prefers-reduced-motion: reduce)');
    if(query.matches)return;
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target);}
    }),{threshold:.08});
    const discover=()=>document.querySelectorAll('.work-card,.work-heading,.photo-section-heading,.photo-tile,.photography-teaser,.portfolio-card').forEach(element=>{
      if(!element.hasAttribute('data-reveal')){element.setAttribute('data-reveal','');observer.observe(element);}
    });
    discover();
    const mutations=new MutationObserver(discover);mutations.observe(document.getElementById('main-content')!,{childList:true,subtree:true});
    const reduce=()=>{if(query.matches)document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-revealed'));};
    query.addEventListener('change',reduce);
    return ()=>{observer.disconnect();mutations.disconnect();query.removeEventListener('change',reduce);};
  },[]);
  return null;
}
