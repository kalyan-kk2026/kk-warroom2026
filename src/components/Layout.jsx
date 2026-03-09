import { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

import { SECTION_IDS } from '../config/sections'

export default function Layout({ user, onLogout }) {
  const initialHash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
  const [hash, setHash] = useState(initialHash)
  const [activeSection, setActiveSection] = useState(initialHash || SECTION_IDS[0])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const mainRef = useRef(null)

  useEffect(() => {
    const onHashChange = () => {
      const newHash = window.location.hash.slice(1)
      setHash(newHash)
      setActiveSection(newHash)
      setSidebarOpen(false)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (!hash || !mainRef.current) return
    const el = document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  // Scroll-spy: highlight sidebar item for the section currently in view (relative to scroll container)
  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const onScroll = () => {
      const mainRect = main.getBoundingClientRect()
      const threshold = mainRect.top + 140
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const elTop = el.getBoundingClientRect().top
        if (elTop <= threshold) current = id
      }
      if (current === '' && main.scrollTop < 80) current = SECTION_IDS[0]
      setActiveSection((prev) => (current || prev))
    }

    onScroll()
    main.addEventListener('scroll', onScroll, { passive: true })
    return () => main.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="flex h-screen overflow-hidden relative z-10">
      <Sidebar
        currentHash={hash}
        activeSection={activeSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        <Header user={user} onLogout={onLogout} onMenuClick={() => setSidebarOpen(true)} />
        <main ref={mainRef} className="flex-1 overflow-auto overflow-x-hidden p-4 sm:p-5 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
