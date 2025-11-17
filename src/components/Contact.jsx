import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      // This would normally POST to a backend endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you soon.')
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
        <p className="text-slate-300 mt-2">Tell me about your project and I’ll reach out.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input required placeholder="Name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 ring-white/20" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 ring-white/20" />
          <textarea required placeholder="Project details" rows="5" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 ring-white/20" />
          <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:shadow-lg transition-shadow">
            <Send className="w-4 h-4" />
            Send message
          </button>
          {status && <p className="text-slate-300 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
