import { PageIntro } from './PageIntro';
export function AboutPage() {
  return <>
    <PageIntro eyebrow="Education & background" title="About Prisha Goel" description="I’m a senior at Palo Alto Middle College and a dual-enrolled student at Foothill College, graduating from high school in June 2027." />
    <div className="max-w-6xl mx-auto px-6 pb-20 space-y-10">
      <section id="education" className="rounded-lg border border-zinc-800 bg-zinc-950 p-7 md:p-9"><h2 className="text-white text-2xl mb-5">Education</h2><p className="text-zinc-300 leading-relaxed">At Foothill College, I study computer science, mathematics, physics, and engineering alongside high school coursework. I’ve earned a 3.84 GPA and Dean’s List, First Honors in two quarters.</p></section>
      <section id="honors" className="rounded-lg border border-zinc-800 bg-zinc-950 p-7 md:p-9"><h2 className="text-white text-2xl mb-5">Honors</h2><ul className="space-y-4 text-zinc-300 list-disc pl-5"><li>Research & Service Leadership Symposium finalist, Foothill College — 2026</li><li>Stanford ProCo — 1st Place, individual; 4th Place, Advanced Division team — 2025–2026</li><li>President’s Volunteer Service Award, Gold — 250+ hours in one year — 2024</li></ul></section>
    </div>
  </>;
}
