export function PageIntro({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {
  return <div className="max-w-6xl mx-auto px-6 pt-36 pb-12"><p className="text-xs uppercase tracking-widest text-purple-400 mb-4">{eyebrow}</p><h1 className="text-4xl md:text-5xl text-white mb-6">{title}</h1>{description && <p className="text-lg text-indigo-200 max-w-3xl leading-relaxed">{description}</p>}</div>;
}
