import React from 'react'

const verticals = ['Finance', 'Healthcare', 'Retail', 'Energy', 'Public Sector', 'Telecom']

export default function Industries() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Industries</h1>
        <p className="text-white/70 mt-2 max-w-2xl">We partner with leaders across critical verticals where reliability and compliance matter most.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {verticals.map((v) => (
          <div key={v} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
            <div className="h-16 rounded bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/30 mb-4" />
            <h3 className="font-semibold text-white">{v}</h3>
            <p className="text-white/70 text-sm">Modernization, AI, and platforms tailored to {v.toLowerCase()} requirements.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
