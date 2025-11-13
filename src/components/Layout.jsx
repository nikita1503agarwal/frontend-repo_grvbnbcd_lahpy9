import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function NavLink({ to, children }) {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active ? 'text-white bg-white/10' : 'text-white/80 hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-fuchsia-500/10 to-transparent pointer-events-none" />
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
                <span className="font-semibold">BlueForge</span>
              </Link>
              <nav className="hidden md:flex items-center gap-1">
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/work">Work</NavLink>
                <NavLink to="/industries">Industries</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/blog">Resources</NavLink>
                <Link to="/contact" className="ml-3 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-medium hover:opacity-90">Contact</Link>
              </nav>
              <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-white/10">
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden border-t border-white/10">
                <div className="px-4 py-3 flex flex-col gap-2">
                  <NavLink to="/products">Products</NavLink>
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/work">Work</NavLink>
                  <NavLink to="/industries">Industries</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/careers">Careers</NavLink>
                  <NavLink to="/blog">Resources</NavLink>
                  <Link to="/contact" className="px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-medium">Contact</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
      <main>{children}</main>
      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8 text-sm text-white/70">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
              <span className="font-semibold text-white">BlueForge</span>
            </div>
            <p>Enterprise-grade software and AI systems for ambitious teams.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Company</p>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Resources</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Contact</p>
            <p>hello@blueforge.dev</p>
            <p>1-800-BLUEFORGE</p>
          </div>
        </div>
        <div className="text-center text-white/50 text-xs py-6">© {new Date().getFullYear()} BlueForge. All rights reserved.</div>
      </footer>
    </div>
  )
}
