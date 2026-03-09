import { UserCheck, Map, ClipboardList, BarChart3, Info } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from 'recharts'
import { volunteerStats } from '../../data/mockData'

const EXECUTED_COLOR = '#4ade80'
const PENDING_COLOR = '#fb7185'

function ProgressRing({ value, color, size = 64, strokeWidth = 6 }) {
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <div className="relative inline-flex" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-war-border" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">{value}%</span>
    </div>
  )
}

export default function VolunteerManagement() {
  const { assemblyDoorToDoorExecutionPct, doorToDoorExecutionByCategory, boothsByCategory } = volunteerStats

  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      {/* Header */}
      <div className="px-4 sm:px-5 py-4 border-b border-war-border bg-gradient-to-r from-war-panel to-war-surface/50 transition-colors duration-300">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-war-accent/15 border border-war-accent/30 flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-war-accent" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-semibold text-white">Booth level campaign tracker</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" />
            <span className="text-war-muted text-sm">Live</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4 sm:space-y-6">
        {/* Context: booth segregation */}
 {/* KPIs row: Total Booths, Booth reports received, Booth reports pending */}
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Booths', value: volunteerStats.totalBooths, Icon: Map, colorClass: 'bg-war-accent/15', iconColor: 'text-war-accent' },
            { label: 'Booth reports received', value: volunteerStats.boothReportsReceived, Icon: ClipboardList, colorClass: 'bg-war-success/15', iconColor: 'text-war-success' },
            { label: 'Booth reports pending', value: volunteerStats.boothReportsPending, Icon: ClipboardList, colorClass: 'bg-war-danger/15', iconColor: 'text-war-danger' },
          ].map(({ label, value, Icon, colorClass, iconColor }, i) => (
            <div
              key={label}
              style={{ animationDelay: `${i * 80}ms` }}
              className="rounded-xl bg-war-dark border border-war-border p-4 flex items-center gap-3 animate-scale-in-bounce card-hover-lift"
            >
              <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center shrink-0`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div>
                <p className="text-war-muted text-xs font-medium">{label}</p>
                <p className="text-xl font-bold text-white tabular-nums">{value}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Assembly-level execution (main metric) */}
        <div className="rounded-xl border border-war-accent/30 bg-war-dark p-4 sm:p-6 flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <ProgressRing value={assemblyDoorToDoorExecutionPct} color="#a78bfa" size={72} strokeWidth={6} />
            <div className="min-w-0">
              <p className="text-war-muted text-xs sm:text-sm font-medium">Assembly</p>
              <p className="text-lg sm:text-2xl font-bold text-white mt-0.5">Door to Door Campaign Status</p>
            </div>
          </div>
        </div>

       

        {/* Stacked bar: Door-to-door execution % by Block Panchayat & Urban Local Body */}
        <div className="rounded-xl bg-war-dark border border-war-border overflow-hidden">
          <div className="px-3 sm:px-5 py-2 sm:py-3 border-b border-war-border flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-war-accent flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white">Block / Urban Local Body Level Campaign Status</span>
          </div>
          <div className="p-3 sm:p-5">
            <div className="h-56 sm:h-72 min-h-[220px] animate-fade-in-up-visible" style={{ animationDelay: '80ms' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={doorToDoorExecutionByCategory}
                  margin={{ top: 12, right: 12, left: 0, bottom: 8 }}
                  barCategoryGap="24%"
                  barGap={2}
                  animationDuration={600}
                  animationEasing="ease-out"
                >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={{ stroke: '#1e3a5f' }} />
                <YAxis type="number" domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(v) => `${v}%`} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#131d33', border: '1px solid #1e3a5f', borderRadius: '10px', color: '#e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                  wrapperStyle={{ outline: 'none' }}
                  cursor={false}
                  formatter={(value, name) => [`${value}%`, name === 'executed' ? 'Executed' : 'Pending']}
                  labelFormatter={(_, payload) => payload[0]?.payload?.label ?? ''}
                />
                <Legend
                  wrapperStyle={{ paddingTop: '8px' }}
                  formatter={(value) => (value === 'executed' ? 'Executed' : 'Pending')}
                  iconType="square"
                  iconSize={10}
                  align="center"
                />
                <Bar dataKey="executed" name="executed" stackId="a" fill={EXECUTED_COLOR} radius={[0, 0, 4, 4]} maxBarSize={48} isAnimationActive animationDuration={600} animationEasing="ease-out" />
                <Bar dataKey="pending" name="pending" stackId="a" fill={PENDING_COLOR} radius={[4, 4, 0, 0]} maxBarSize={48} isAnimationActive animationDuration={600} animationEasing="ease-out" animationBegin={150} />
              </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
