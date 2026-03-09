import { useState, useEffect } from 'react'
import { CalendarCheck, Car, Phone } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts'
import { pollingDayData } from '../../data/mockData'

export default function PollingDay() {
  const [lastUpdated, setLastUpdated] = useState(() =>
    new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  )

  useEffect(() => {
    const t = setInterval(() => {
      setLastUpdated(new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }))
    }, 60000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-war-accent flex-shrink-0" />
              Election Day Polling Tracker
            </h2>
            <span className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" aria-hidden />
              <span className="text-war-muted text-sm">Live</span>
            </span>
          </div>
          <span className="text-war-muted text-xs sm:text-sm">
            Turnout: <span className="font-semibold text-white tabular-nums">{pollingDayData.hourlyTurnout[pollingDayData.hourlyTurnout.length - 1]?.pct ?? 0}%</span>
          </span>
        </div>
        <p className="text-war-muted text-xs sm:text-sm mt-2">
          Last updated: {lastUpdated}
        </p>
      </div>
      <div className="p-4 sm:p-5 space-y-4 sm:space-y-6">
        <div>
          <p className="text-war-muted text-xs sm:text-sm mb-2">Hourly voting percentage</p>
          <div className="h-[200px] sm:h-[240px] min-h-[180px] animate-fade-in-up-visible" style={{ animationDelay: '100ms' }}>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={pollingDayData.hourlyTurnout}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                animationDuration={700}
                animationEasing="ease-out"
              >
                <XAxis dataKey="hour" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8' }} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  formatter={(v) => [`${v}%`, 'Turnout']}
                  contentStyle={{ backgroundColor: '#131d33', border: '1px solid #1e3a5f', borderRadius: '8px', color: '#e2e8f0' }}
                  wrapperStyle={{ outline: 'none' }}
                />
                <ReferenceLine y={75} stroke="#64748b" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="pct" stroke="#a78bfa" strokeWidth={2} dot={{ fill: '#a78bfa' }} name="Turnout %" isAnimationActive animationDuration={700} animationEasing="ease-out" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
