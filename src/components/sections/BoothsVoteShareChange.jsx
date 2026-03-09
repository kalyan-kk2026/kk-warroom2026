import { TrendingDown, TrendingUp } from 'lucide-react'
import { boothsVoteShareFell, boothsVoteShareIncreased } from '../../data/mockData'

export default function BoothsVoteShareChange() {
  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-wrap items-center gap-2 sm:gap-3">
        <h2 className="text-base sm:text-lg font-semibold text-white">Booths Wise Vote Share Drop & Raise</h2>
        <span className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5 w-fit">
          <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" aria-hidden />
          <span className="text-war-muted text-sm">Live</span>
        </span>
      </div>
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <p className="text-war-muted text-sm mb-2 flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-war-danger" />
             Vote Share Dropped
          </p>
          <ul className="space-y-2">
            {boothsVoteShareFell.map((b) => (
              <li
                key={b.id}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-war-dark border border-war-border"
              >
                <span className="text-gray-300 text-sm truncate flex-1 min-w-0">{b.booth}</span>
                <span className="text-war-danger font-semibold text-sm flex-shrink-0">{b.change}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-war-muted text-sm mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-war-success" />
            Vote Share Raised
          </p>
          <ul className="space-y-2">
            {boothsVoteShareIncreased.map((b) => (
              <li
                key={b.id}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-war-dark border border-war-border"
              >
                <span className="text-gray-300 text-sm truncate flex-1 min-w-0">{b.booth}</span>
                <span className="text-war-success font-semibold text-sm flex-shrink-0">+{b.change}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
