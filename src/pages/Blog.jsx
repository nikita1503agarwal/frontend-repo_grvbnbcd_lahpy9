import React from 'react'

const posts = [
  { slug: 'platform-blueprints', title: 'Platform Blueprints for Scale', excerpt: 'How to design a platform that ships daily and scales to millions.' },
  { slug: 'ml-observability', title: 'ML Observability That Matters', excerpt: "What to measure and why it's more than metrics." },
  { slug: 'secure-sdlc', title: 'Secure SDLC in Practice', excerpt: 'Team habits that help you pass audits without slowing down.' },
]

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Resources</h1>
        <p className="text-white/70 mt-2">Insights and playbooks from the field.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div key={p.slug} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
            <div className="h-32 rounded bg-white/5 mb-4" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-white/70 text-sm">{p.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
