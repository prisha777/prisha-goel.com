import { motion } from 'motion/react';
import portrait from '@/assets/portfolio/portrait.jpg';
import { siteHref } from '../navigation';

export function Home() {
  return <>
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 pt-36 pb-20 md:pt-44 md:pb-24">
      <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 md:gap-16">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <p className="text-purple-300 text-xs uppercase tracking-widest mb-5">Palo Alto, California · Class of 2027</p>
          <h1 className="text-white text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">Hi, I’m <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Prisha.</span></h1>
          <p className="text-2xl text-purple-100 leading-snug mb-6">Curious about AI.<br />Motivated by people.</p>
          <p className="text-purple-200 leading-relaxed max-w-lg mb-8">I’m a senior at Palo Alto Middle College and a dual-enrolled student at Foothill College. I research AI in healthcare, build tools for communities, and teach students to make things of their own.</p>
          <div className="flex flex-wrap gap-3">
            <a href={siteHref('research/')} className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm hover:shadow-lg hover:shadow-purple-600/20 transition-shadow">Explore my research →</a>
            <a href={siteHref('about/')} className="px-6 py-3 rounded-full border border-purple-500/50 text-purple-100 text-sm hover:border-pink-400 transition-colors">A little about me</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-purple-300"><a href="https://github.com/prisha777" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/prisha-goel/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="mailto:goelprisha.07@gmail.com">Email ↗</a></div>
        </motion.div>
        <motion.figure initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.7,delay:0.1}} className="relative w-full max-w-sm mx-auto">
          <div aria-hidden="true" className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-2xl" />
          <img src={portrait} alt="Portrait of Prisha Goel" width="675" height="900" fetchPriority="high" className="relative w-full aspect-[4/5] object-cover object-top rounded-2xl border border-purple-500/30 shadow-2xl" />
          <figcaption className="relative mt-4 text-xs text-purple-300 text-center tracking-wide">Researcher · Developer · STEM educator</figcaption>
        </motion.figure>
      </div>
    </section>
    <section className="bg-slate-950 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-3 items-end justify-between mb-8"><h2 className="text-white text-2xl">A few things I care about</h2><span className="text-purple-400 text-sm">Explore at your own pace</span></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {label:'Research',text:'AI, healthcare & evidence',description:'Medical imaging, biosensors, and why predictions need real-world validation.',path:'research/',icon:'↗',color:'from-purple-500 to-pink-500'},
            {label:'Projects',text:'Ideas made useful',description:'Community websites, educational platforms, creative tools, and games.',path:'projects/',icon:'⌘',color:'from-blue-500 to-cyan-500'},
            {label:'Community',text:'Learning, together',description:'Weekly STEM teaching, peer mentorship, and science-driven climate advocacy.',path:'community/',icon:'✦',color:'from-pink-500 to-orange-500'},
          ].map(item => <motion.a key={item.path} href={siteHref(item.path)} whileHover={{y:-6}} className="group block bg-slate-900/50 backdrop-blur-sm border border-indigo-800/30 rounded-2xl p-7 hover:border-indigo-600/60 transition-colors"><span className={`inline-block mb-5 text-3xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.icon}</span><p className="text-xs uppercase tracking-widest text-purple-400 mb-3">{item.label}</p><h3 className="text-white text-xl mb-3">{item.text}</h3><p className="text-indigo-200 text-sm leading-relaxed mb-6">{item.description}</p><span className="text-purple-300 text-sm group-hover:text-pink-300">Take a look →</span></motion.a>)}
        </div>
        <p className="text-sm text-purple-300 mt-10">Recently featured in Canary Media for my work with Induction Rocks. <a className="text-pink-300 underline underline-offset-4" href={siteHref('press/')}>Read the story →</a></p>
      </div>
    </section>
  </>;
}
