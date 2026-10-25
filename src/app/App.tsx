import { lazy, Suspense, useEffect } from 'react';
import { MouseFollower } from './components/MouseFollower';
import { RevealMotion } from './components/RevealMotion';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { basePath, siteHref } from './navigation';
const PhotographyPage=lazy(()=>import('./components/PhotographyPage').then(m=>({default:m.PhotographyPage})));
const ContentIndex=lazy(()=>import('./components/ContentIndex').then(m=>({default:m.ContentIndex})));
const DetailPage=lazy(()=>import('./components/DetailPage').then(m=>({default:m.DetailPage})));
const AboutPage=lazy(()=>import('./components/AboutPage').then(m=>({default:m.AboutPage})));
const MediaPage=lazy(()=>import('./components/MediaPage').then(m=>({default:m.MediaPage})));
const ContactPage=lazy(()=>import('./components/ContactPage').then(m=>({default:m.ContactPage})));

export default function App() {
  const path=window.location.pathname.startsWith(basePath)?window.location.pathname.slice(basePath.length):window.location.pathname.slice(1);
  const route=path.replace(/index\.html$/,'').replace(/\/$/,'');
  const [page='',id]=route.split('/');
  const aliases:Record<string,string>={'community':'experience/','gallery':'photography/','projects/3':'research/flood-vulnerability/','experience/leebos':'projects/2/','experience/scientific-teen':'press/','about/foothill':'about/#education','about/deans-list':'about/#education','about/research-finalist':'about/#honors','about/stanford-proco':'about/#honors','about/volunteer-service-award':'about/#honors'};
  useEffect(()=>{
    if(aliases[route])window.location.replace(siteHref(aliases[route]));
    document.title=page?`${page==='press'?'Writing & media':page.charAt(0).toUpperCase()+page.slice(1)} | Prisha Goel`:'Prisha Goel | Healthcare AI Research & Coding Education';
  },[route]);
  useEffect(()=>{
    if(!window.location.hash)return;
    const scrollToSection=()=>{
      const target=document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if(!target)return false;
      target.scrollIntoView({behavior:'instant'});return true;
    };
    const frame=requestAnimationFrame(scrollToSection);
    window.addEventListener('load',scrollToSection,{once:true});
    const observer=new MutationObserver(()=>{if(scrollToSection())observer.disconnect();});
    observer.observe(document.getElementById('main-content')!,{childList:true,subtree:true});
    return ()=>{cancelAnimationFrame(frame);window.removeEventListener('load',scrollToSection);observer.disconnect();};
  },[]);
  let content;
  if(aliases[route])content=<p className="pt-36 pb-20 px-6 text-zinc-200">This content has moved. <a className="underline" href={siteHref(aliases[route])}>Continue →</a></p>;
  else if(id)content=<DetailPage category={page} id={id}/>;
  else if(page==='')content=<Home/>;
  else if(['research','projects','experience'].includes(page))content=<ContentIndex category={page as 'research'|'projects'|'experience'}/>;
  else if(page==='photography')content=<PhotographyPage/>;
  else if(page==='about')content=<AboutPage/>;
  else if(page==='press')content=<MediaPage/>;
  else if(page==='contact')content=<ContactPage/>;
  else content=<DetailPage category="missing" id="missing"/>;
  return <div className="site-shell min-h-screen bg-black overflow-x-hidden"><a href="#main-content" className="skip-link">Skip to content</a><MouseFollower/><RevealMotion/><Header/><main id="main-content"><Suspense fallback={<p role="status" className="pt-36 pb-20 px-6 text-zinc-200">Loading page…</p>}>{content}</Suspense></main><Footer/></div>;
}
