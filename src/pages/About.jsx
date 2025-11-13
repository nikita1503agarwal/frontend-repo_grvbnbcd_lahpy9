import React from 'react'

const leaders = [
  { name: 'Alex Rivera', role: 'CEO', bio: 'Product-first operator with 15+ years in platforms and AI.' },
  { name: 'Maya Chen', role: 'CTO', bio: 'Led engineering at scale across data, ML, and developer platforms.' },
  { name: 'Samir Patel', role: 'Head of Design', bio: 'Brings brand and product together for award-winning experiences.' },
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">About</h1>
        <p className="text-white/70 mt-2 max-w-2xl">We exist to help ambitious teams build the future — responsibly and at speed.</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {leaders.map((l) => (
          <div key={l.name} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="h-24 w-24 rounded-full bg-white/10 mb-4" />
            <h3 className="font-semibold">{l.name}</h3>
            <p className="text-white/60 text-sm">{l.role}</p>
            <p className="text-white/70 text-sm mt-2">{l.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
