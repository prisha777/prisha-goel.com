import { useState } from 'react';
import { navigation, siteHref } from '../navigation';
export function Header() {
  const [open,setOpen]=useState(false);
  const current=window.location.pathname;
  const active=(path:string)=>path?current.startsWith(siteHref(path)):current===siteHref()||current===siteHref('index.html');
  return <header className="site-header"><nav aria-label="Main navigation" className="header-inner">
    <a className="brand" href={siteHref()}><span className="brand-mark" aria-hidden="true">pg.</span><span>Prisha Goel</span></a>
    <div className="desktop-nav">{navigation.map(item=><a key={item.path} href={siteHref(item.path)} aria-current={active(item.path)?'page':undefined}>{item.label}</a>)}<a className="header-contact" href={siteHref('contact/')}>Contact me ↗</a></div>
    <button className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button>
    {open&&<div id="mobile-navigation" className="mobile-nav">{[...navigation,{label:'Contact',path:'contact/'}].map(item=><a key={item.path} href={siteHref(item.path)} aria-current={active(item.path)?'page':undefined}>{item.label}</a>)}</div>}
  </nav></header>;
}
