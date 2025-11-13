import React, { useState } from 'react'

const jobs = [
  { id: 1, title: 'Senior Platform Engineer', department: 'Engineering', location: 'Remote' },
  { id: 2, title: 'Product Designer', department: 'Design', location: 'NYC / Remote' },
  { id: 3, title: 'AI/ML Engineer', department: 'Engineering', location: 'Remote' },
]

export default function Careers() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const apply = (job) => { setSelected(job); setOpen(true) }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Careers</h1>
        <p className="text-white/70 mt-2">Join a team shipping category-defining products.</p>
      </header>
      <div className="space-y-4">
        {jobs.map(j => (
          <div key={j.id} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{j.title}</h3>
                <p className="text-white/60 text-sm">{j.department} • {j.location}</p>
              </div>
              <button onClick={() => apply(j)} className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm">Apply</button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm grid place-items-center p-4">
          <div className="w-full max-w-lg p-6 rounded-xl bg-slate-900 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Apply for {selected?.title}</h3>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">Close</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Mock application submitted!'); setOpen(false) }} className="space-y-3">
              <input required placeholder="Full name" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10" />
              <input required type="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10" />
              <textarea required placeholder="Why you?" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 h-28" />
              <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
