import { BarChart3 } from 'lucide-react'
import {
  pollingTrackerHighTurnout,
  pollingTrackerModerateTurnout,
  pollingTrackerLowTurnout,
} from '../../data/mockData'

const PANELS = [
  {
    title: 'High Turnout Booths',
    data: pollingTrackerHighTurnout,
    className: 'text-war-success',
    borderColor: 'border-war-success/30',
  },
  {
    title: 'Moderate Turnout Booths',
    data: pollingTrackerModerateTurnout,
    className: 'text-war-accent',
    borderColor: 'border-war-accent/30',
  },
  {
    title: 'Low Turnout Booths',
    data: pollingTrackerLowTurnout,
    className: 'text-war-danger',
    borderColor: 'border-war-danger/30',
  },
]

export default function PollingTracker() {
  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-wrap items-center gap-2 sm:gap-3">
        <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-war-accent flex-shrink-0" />
          Booth Wise Polling Status
        </h2>
        <span className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5 w-fit">
          <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" aria-hidden />
          <span className="text-war-muted text-sm">Live</span>
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-5">
        {PANELS.map(({ title, data, className, borderColor }) => (
          <div
            key={title}
            className={`bg-war-dark border rounded-xl overflow-hidden min-w-0 ${borderColor} border`}
          >
            <div className={`px-3 sm:px-4 py-2.5 sm:py-3 border-b ${borderColor} border text-center`}>
              <h3 className={`text-sm sm:text-base font-semibold ${className}`}>{title}</h3>
            </div>
            <ul className="divide-y divide-war-border/50">
              {data.map(({ boothNumber, turnoutPct }) => (
                <li
                  key={boothNumber}
                  className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-white/5 transition-colors"
                >
                  <span className="text-gray-300 text-sm font-medium">Booth {boothNumber}</span>
                  <span className={`font-semibold tabular-nums text-sm ${className}`}>
                    {turnoutPct}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
