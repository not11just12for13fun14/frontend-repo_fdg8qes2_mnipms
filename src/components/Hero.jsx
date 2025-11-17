import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 w-full">
        <div className="py-24">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-sky-200 backdrop-blur">
            Available for freelance • Frontend Developer
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
            I craft delightful web experiences
          </h1>
          <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-xl">
            Modern, fast, and accessible interfaces built with React, animations, and a strong eye for detail.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-lg transition-shadow">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white font-medium backdrop-blur hover:bg-white/20 transition-colors">Contact Me</a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900" />
    </section>
  )
}
