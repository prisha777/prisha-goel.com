export function PageIntro({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {
  return <div className="max-w-6xl mx-auto px-6 pt-36 pb-12"><p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">{eyebrow}</p><h1 className="text-4xl md:text-5xl text-white mb-6">{title}</h1>{description && <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">{description}</p>}</div>;
}
