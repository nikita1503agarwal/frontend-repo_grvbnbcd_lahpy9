import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will be in touch shortly.')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <p className="text-white/70 mt-2">Let’s discuss your roadmap.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="space-y-3">
          <input required placeholder="Full name" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10" />
          <input required type="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10" />
          <input placeholder="Company" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10" />
          <textarea required placeholder="How can we help?" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 h-32" />
          <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500">Send</button>
          {status && <p className="text-cyan-300 text-sm">{status}</p>}
        </form>
        <div>
          <div className="h-64 rounded-xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 border border-white/10 mb-4" />
          <p className="text-white/70 text-sm">HQ — 100 Enterprise Way, San Francisco, CA</p>
          <p className="text-white/70 text-sm">hello@blueforge.dev • 1-800-BLUEFORGE</p>
        </div>
      </div>
    </div>
  )
}
