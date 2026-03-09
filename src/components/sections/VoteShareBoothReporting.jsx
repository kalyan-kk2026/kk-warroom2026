import { PieChart as PieIcon, FileBarChart } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { voteShareBoothReporting, oppositionCandidate } from '../../data/mockData'

const voteShareData = [
  { name: voteShareBoothReporting.ourPartyName, pct: voteShareBoothReporting.ourVoteShare, fill: '#a78bfa' },
  { name: oppositionCandidate.party, pct: voteShareBoothReporting.opponentShare, fill: '#fb7185' },
  { name: 'Others', pct: voteShareBoothReporting.othersShare, fill: '#64748b' },
]

export default function VoteShareBoothReporting() {
  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
          <PieIcon className="w-5 h-5 text-war-accent transition-transform duration-200 flex-shrink-0" />
          Vote share & booth reporting
        </h2>
        <span className="text-war-muted text-xs sm:text-sm">Day-by-day · Last updated: {voteShareBoothReporting.lastUpdated}</span>
      </div>
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <p className="text-war-muted text-sm mb-2">Estimated vote share (AC-42)</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-war-dark border border-war-border p-4 transition-all duration-200 hover:border-war-accent/30 hover:shadow-md">
              <span className="text-gray-300">{voteShareBoothReporting.ourPartyName}</span>
              <span className="text-xl font-bold text-war-accent tabular-nums">{voteShareBoothReporting.ourVoteShare}%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-war-dark border border-war-border p-4 transition-all duration-200 hover:border-war-danger/30 hover:shadow-md">
              <span className="text-gray-300">{oppositionCandidate.party}</span>
              <span className="text-xl font-bold text-war-danger tabular-nums">{voteShareBoothReporting.opponentShare}%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-war-dark border border-war-border p-4 transition-all duration-200 hover:border-war-border hover:shadow-md">
              <span className="text-gray-300">Others</span>
              <span className="text-xl font-bold text-war-muted tabular-nums">{voteShareBoothReporting.othersShare}%</span>
            </div>
          </div>
        </div>
        <div>
          <div className="h-44 sm:h-52 min-h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={voteShareData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              animationDuration={600}
              animationEasing="ease-out"
            >
              <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8' }} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                formatter={(v) => [`${v}%`, 'Share']}
                contentStyle={{ backgroundColor: '#131d33', border: '1px solid #1e3a5f', borderRadius: '8px', color: '#e2e8f0' }}
                wrapperStyle={{ outline: 'none' }}
                cursor={{ fill: 'rgba(30, 58, 95, 0.25)', stroke: '#1e3a5f' }}
              />
              <Bar dataKey="pct" name="Share %" radius={[4, 4, 0, 0]} isAnimationActive animationDuration={600} animationEasing="ease-out" />
            </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-war-dark border border-war-border p-3">
            <span className="text-war-muted text-sm">Booths reported</span>
            <span className="font-semibold text-white">
              {voteShareBoothReporting.boothsReported} / {voteShareBoothReporting.totalBooths}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
