import { useState } from 'react';
export function ResearchMedia() {
  const [play,setPlay]=useState(false);
  return <figure className="rounded-2xl border border-indigo-800/30 overflow-hidden bg-slate-900/50">
    <div className="aspect-video relative bg-slate-950">
      {play ? <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/kckUt2K1BSo?autoplay=1" title="Prisha Goel — CCIR Student Spotlight: flood vulnerability research" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <button onClick={()=>setPlay(true)} className="w-full h-full relative group" aria-label="Play Prisha Goel’s CCIR Student Spotlight"><img src="https://i.ytimg.com/vi/kckUt2K1BSo/hqdefault.jpg" alt="CCIR Student Spotlight video preview" loading="lazy" className="w-full h-full object-cover opacity-70" /><span className="absolute inset-0 flex items-center justify-center"><span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-2xl shadow-xl">▶</span></span></button>}
    </div>
    <figcaption className="p-6 text-indigo-200 text-sm">My flood vulnerability research, in conversation. <a href="https://www.youtube.com/watch?v=kckUt2K1BSo" target="_blank" rel="noopener noreferrer" className="text-purple-300 underline underline-offset-4">Watch the CCIR Student Spotlight ↗</a></figcaption>
  </figure>;
}
