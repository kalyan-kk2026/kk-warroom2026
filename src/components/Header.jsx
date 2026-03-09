import { LogOut, User, Menu } from 'lucide-react'

export default function Header({ user, onLogout, onMenuClick }) {
  return (
    <header className="flex-shrink-0 h-12 sm:h-14 border-b border-war-border bg-war-panel/90 backdrop-blur-sm flex items-center justify-between gap-2 px-3 sm:px-4 lg:px-6 animate-fade-in-down-visible">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="lg:hidden p-2 rounded-lg text-war-muted hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="flex items-center gap-2 text-war-muted text-xs sm:text-sm transition-colors duration-200 flex-shrink-0">
          <span className="live-dot" />
          Live
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm min-w-0">
          <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-war-muted flex-shrink-0" />
          <span className="text-gray-300 truncate max-w-[100px] sm:max-w-none">{user?.name}</span>
          <span className="px-1.5 sm:px-2 py-0.5 rounded bg-war-accent/10 text-war-accent text-[10px] sm:text-xs font-medium capitalize border border-war-accent/20 flex-shrink-0">
            {user?.role}
          </span>
        </div>
        <button
          onClick={onLogout}
          className="p-1.5 sm:p-2 rounded-lg text-war-muted hover:text-white hover:bg-white/10 transition-all duration-200 ease-out active:scale-95"
          title="Logout"
          aria-label="Logout"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}
