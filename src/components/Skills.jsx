import { Code2, Layout, Palette, Zap } from 'lucide-react'

function Skill({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-sky-300" />
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
      <p className="text-slate-300 text-sm mt-2">{desc}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">I build modern, robust frontends with a focus on performance and polish.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Skill icon={Layout} title="React UI" desc="Component-driven architecture with reusable patterns." />
          <Skill icon={Palette} title="Design Systems" desc="Accessible, consistent interfaces with Tailwind & Radix." />
          <Skill icon={Zap} title="Performance" desc="Code-splitting, memoization, and Web Vitals focus." />
          <Skill icon={Code2} title="Animations" desc="Micro-interactions and motion for delightful UX." />
        </div>
      </div>
    </section>
  )
}
