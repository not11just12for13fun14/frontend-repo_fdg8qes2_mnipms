import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 selection:bg-sky-500/30 selection:text-white">
      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <footer id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-white">About me</h3>
              <p className="mt-3 text-slate-300">I’m a frontend developer who loves turning ideas into interactive, performant interfaces. I combine strong visual sense with engineering discipline to ship polished products.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-white font-semibold">Currently</h4>
              <ul className="mt-3 text-slate-300 space-y-2 list-disc list-inside">
                <li>Building modern React frontends</li>
                <li>Exploring motion design and 3D on the web</li>
                <li>Consulting for startups on design systems</li>
              </ul>
            </div>
          </div>
        </footer>
        <Contact />
      </main>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Your Name</p>
          <p>Made with passion and plenty of coffee</p>
        </div>
      </div>
    </div>
  )
}

export default App
