import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm md:text-base text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/10 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">Dev Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="w-px h-6 bg-white/10" />
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#contact" aria-label="Email" className="text-slate-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </nav>

          <button onClick={toggle} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-200 hover:text-white hover:bg-white/5">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="px-6 py-4 grid gap-4">
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#skills" onClick={close}>Skills</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin className="w-5 h-5" /></a>
              <a href="#contact" className="text-slate-300 hover:text-white"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
