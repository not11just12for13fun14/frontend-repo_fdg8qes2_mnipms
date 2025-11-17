import { useEffect, useState } from 'react'
import { Globe, Rocket, Sparkles } from 'lucide-react'

const projectsSeed = [
  {
    title: 'Motion Storefront',
    description: 'High-performance e-commerce UI with micro-animations and dynamic theming.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Beautiful analytics dashboard with charts, filters, and responsive layouts.',
    tags: ['React', 'Recharts', 'Radix UI'],
    link: '#',
  },
  {
    title: '3D Landing',
    description: 'Interactive 3D hero built with Spline, optimized for performance.',
    tags: ['React', 'Spline', 'Performance'],
    link: '#',
  },
]

function Tag({ children }) {
  return <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">{children}</span>
}

function Card({ p }) {
  return (
    <a href={p.link} className="group block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white group-hover:translate-x-0.5 transition-transform">{p.title}</h3>
        <Rocket className="w-5 h-5 text-sky-300" />
      </div>
      <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // In a real app this could fetch from backend; using seed locally
    setProjects(projectsSeed)
  }, [])

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.1),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.1),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-sky-300" />
          <span className="text-sky-200 text-sm">Selected work</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">
          A few things I loved building recently.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-slate-300">
          <Globe className="w-4 h-4" />
          <span className="text-sm">More coming soon</span>
        </div>
      </div>
    </section>
  )
}
