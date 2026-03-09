import { SECTIONS } from '../config/sections'
import { X } from 'lucide-react'

const nav = SECTIONS.map(({ id, label, icon }) => ({ hash: id, icon, label }))

export default function Sidebar({ currentHash = '', activeSection = '', isOpen = false, onClose }) {
  const effectiveActive = activeSection || currentHash
  return (
    <>
      <div
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose?.()}
        className={`fixed inset-0 z-30 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        className={`
          w-64 flex-shrink-0 border-r border-war-border bg-war-panel flex flex-col
          fixed lg:relative inset-y-0 left-0 z-40 lg:z-auto
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-4 border-b border-war-border flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-white text-base sm:text-lg">War Room</h2>
              <p className="text-war-muted text-xs mt-0.5">AC-42 · Day-by-day</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="lg:hidden p-2 rounded-lg text-war-muted hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-2">
        {nav.map(({ hash, icon: Icon, label }, i) => {
          const isActive = effectiveActive === hash
          return (
            <a
              key={hash}
              href={`#${hash}`}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium border-l-2 transition-all duration-200 ease-out animate-slide-in-left-visible min-h-[44px] ${
                isActive
                  ? 'bg-war-accent/15 text-war-accent border-war-accent shadow-[inset_0_0_20px_-8px_rgba(167,139,250,0.3)]'
                  : 'border-transparent text-gray-400 hover:bg-white/10 hover:text-white hover:translate-x-0.5'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0 transition-transform duration-200" />
              <span className="truncate flex-1 min-w-0">{label}</span>
              {(hash === 'volunteer' || hash === 'rolling-average' || hash === 'booth-wise-trend' || hash === 'booths-vote-share' || hash === 'leader-switch' || hash === 'polling-tracker' || hash === 'polling') && (
                <span className="flex items-center gap-1.5 flex-shrink-0 rounded bg-war-dark border border-war-border px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-war-success animate-pulse" aria-hidden />
                  <span className="text-war-muted text-xs">Live</span>
                </span>
              )}
            </a>
          )
        })}
        </nav>
      </aside>
    </>
  )
}
