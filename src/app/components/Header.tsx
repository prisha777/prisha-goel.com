import { useState, useEffect } from 'react';
import { navigation, siteHref } from '../navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const current = window.location.pathname;
  const isActive = (path: string) => path ? current.startsWith(siteHref(path)) : current === siteHref() || current === siteHref('index.html');
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 border-b border-purple-900/30 transition-colors ${scrolled || mobileMenuOpen ? 'bg-slate-950/95 backdrop-blur-lg' : 'bg-slate-950/80 backdrop-blur-sm'}`}>
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <a href={siteHref()} className="tracking-wider font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent shrink-0">PRISHA GOEL</a>
          <div className="hidden lg:flex gap-5 items-center">
            {navigation.map(item => <a key={item.path} href={siteHref(item.path)} aria-current={isActive(item.path) ? 'page' : undefined} className={`text-xs uppercase tracking-wide transition-colors hover:text-pink-300 ${isActive(item.path) ? 'text-pink-300' : 'text-purple-200'}`}>{item.label}</a>)}
            <a href={siteHref('contact/')} className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs uppercase tracking-wider">Contact</a>
          </div>
          <button aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-purple-200 p-2 text-2xl">{mobileMenuOpen ? '×' : '☰'}</button>
        </div>
        {mobileMenuOpen && <div id="mobile-navigation" className="lg:hidden grid grid-cols-2 gap-x-6 gap-y-1 mt-5 pb-3">{[...navigation, {label:'Contact',path:'contact/'}].map(item => <a key={item.path} href={siteHref(item.path)} aria-current={isActive(item.path) ? 'page' : undefined} className="py-3 text-sm text-purple-200 border-b border-purple-900/30 hover:text-pink-300">{item.label}</a>)}</div>}
      </nav>
    </header>
  );
}
