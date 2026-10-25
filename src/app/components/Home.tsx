import portrait from '@/assets/portfolio/portrait.webp';
import { siteHref } from '../navigation';

export function Home() {
  return <>
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_240px] gap-10 md:gap-16 items-center">
        <div>
          <p className="text-purple-300 text-sm mb-5">Prisha Goel · Palo Alto Middle College, Class of 2027</p>
          <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">Healthcare AI research.<br /><span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Free coding education.</span></h1>
          <p className="text-purple-100 text-lg leading-relaxed max-w-2xl mb-7">I study how AI can help clinicians interpret medical data, and lead weekly Python and Java classes for 30+ K–12 students through STEM4Others.</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://scienceyouth.org/web/viewer.php?id=352" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-600/20">Read my published UCI paper ↗</a>
            <a href="mailto:goelprisha.07@gmail.com" className="px-6 py-3 rounded-full border border-purple-400/60 text-purple-100 text-sm hover:border-pink-400">Email me about research or teaching</a>
          </div>
        </div>
        <img src={portrait} alt="Prisha Goel" width="240" height="300" fetchPriority="high" className="w-36 md:w-60 aspect-[4/5] object-cover object-top rounded-2xl border border-purple-500/30 justify-self-start md:justify-self-end" />
      </div>
    </section>
    <section className="bg-slate-950 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-2xl mb-7">Selected work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {label:'Stanford AIMI · 2026',title:'Pneumonia detection from chest X-rays',text:'Studied image classification and lesion localization for clinical use.',path:'research/stanford-aimi/',cta:'Read the research'},
            {label:'UCI × GATI BEAM · 2026',title:'Testing what AI predicts about allergies',text:'First-author paper on combining AI with experimental IgE epitope mapping.',path:'research/uci-gati/',cta:'View the paper and context'},
            {label:'STEM4Others · Continuing',title:'Students progressing to projects and peer tutoring',text:'Learners have built their own projects, joined STEM clubs, and begun tutoring younger students.',path:'experience/stem4others/',cta:'See my teaching work'},
          ].map(item => <a key={item.path} href={siteHref(item.path)} className="group block bg-slate-900/50 border border-indigo-800/30 rounded-2xl p-6 hover:border-purple-500/60 transition-colors"><p className="text-xs uppercase tracking-wide text-purple-400 mb-4">{item.label}</p><h3 className="text-white text-lg mb-3">{item.title}</h3><p className="text-indigo-200 text-sm leading-relaxed mb-5">{item.text}</p><span className="text-purple-300 text-sm group-hover:text-pink-300">{item.cta} →</span></a>)}
        </div>
      </div>
    </section>
  </>;
}
