import { useState, useMemo, useEffect } from 'react'
import { TrendingUp } from 'lucide-react'
import { XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid, AreaChart, Area } from 'recharts'
import { rollingAverageDataFourParties, rollingAverageHourlyData, partyColors } from '../../data/mockData'

const PERIODS = [
  { id: '1d', label: '1 day' },
  { id: '3d', label: '3 days' },
  { id: '7d', label: '7 days' },
]

const PARTY_KEYS = ['DMK', 'AIADMK', 'TVK', 'NTK']

const PARTY_COLORS = partyColors

function computeRollingFourParties(data, windowSize) {
  if (windowSize <= 1) return data.map((d) => ({ ...d }))
  return data.map((row, i) => {
    const next = { ...row }
    const slice = data.slice(Math.max(0, i - windowSize + 1), i + 1)
    PARTY_KEYS.forEach((key) => {
      if (slice.length >= windowSize) {
        const partyValues = slice.map((r) => r[key])
        const avg = partyValues.reduce((a, b) => a + b, 0) / windowSize
        next[`${key} (avg)`] = Math.round(avg * 10) / 10
      } else {
        next[`${key} (avg)`] = null
      }
    })
    return next
  })
}

function CustomTooltip({ active, payload, label, isHourly }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-war-border bg-war-panel px-3 py-2.5 shadow-xl min-w-[140px]">
      <p className="text-war-muted text-xs font-medium mb-2 border-b border-war-border pb-1.5">
        {isHourly ? `Hour: ${label}` : `Date: ${label}`}
      </p>
      <div className="space-y-1">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-xs font-medium" style={{ color: entry.color ?? '#e2e8f0' }}>
                {entry.name}
              </span>
            </span>
            <span className="text-white font-semibold tabular-nums text-xs">
              {entry.value != null ? `${entry.value}%` : '—'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function XAxisTickWithHover({ x, y, payload, isHourly }) {
  const label = payload?.value ?? ''
  const title = isHourly ? label : `Date: ${label}`
  return (
    <g transform={`translate(${x},${y})`} style={{ cursor: 'pointer' }} className="x-axis-tick-group">
      <text
        x={0}
        y={0}
        dy={8}
        textAnchor="middle"
        fill="#94a3b8"
        fontSize={11}
        className="x-axis-tick-hover"
      >
        <title>{title}</title>
        {label}
      </text>
    </g>
  )
}

export default function RollingAverage() {
  const [period, setPeriod] = useState('3d')
  const [lastUpdated, setLastUpdated] = useState(() =>
    new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  )

  useEffect(() => {
    const t = setInterval(() => {
      setLastUpdated(new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }))
    }, 60000)
    return () => clearInterval(t)
  }, [])

  const chartData = useMemo(() => {
    if (period === '1d') {
      return rollingAverageHourlyData
    }
    const windowSize = period === '3d' ? 3 : 7
    const computed = computeRollingFourParties(rollingAverageDataFourParties, windowSize)
    const daysToShow = period === '3d' ? 3 : 7
    return computed.slice(-daysToShow)
  }, [period])

  const xAxisDataKey = period === '1d' ? 'hour' : 'date'
  const isHourly = period === '1d'

  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-war-accent transition-transform duration-200 flex-shrink-0" />
              Assembly Level Vote Share Trend
            </h2>
            <span className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" aria-hidden />
              <span className="text-war-muted text-sm">Live</span>
            </span>
          </div>
          <div className="flex rounded-lg bg-war-dark border border-war-border p-1 flex-wrap">
            {PERIODS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPeriod(p.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  period === p.id
                    ? 'bg-war-accent text-war-dark'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <p className="text-war-muted text-xs sm:text-sm mt-2">
          Last updated: {lastUpdated}
        </p>
      </div>
      <div className="p-5">
        <div className="h-[220px] sm:h-[300px] min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 16, right: 16, left: 8, bottom: 8 }}
              animationDuration={700}
              animationEasing="ease-out"
            >
              <defs>
                {PARTY_KEYS.map((key) => (
                  <linearGradient key={key} id={`fill-${key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={PARTY_COLORS[key]} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={PARTY_COLORS[key]} stopOpacity={0} />
                  </linearGradient>
                ))}
                <linearGradient id="fill-value" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={PARTY_COLORS['DMK']} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={PARTY_COLORS['DMK']} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e2e4a" vertical={false} />
              <XAxis
                dataKey={xAxisDataKey}
                tick={<XAxisTickWithHover isHourly={isHourly} />}
                axisLine={{ stroke: '#2e2e4a' }}
                tickLine={{ stroke: '#2e2e4a' }}
              />
              <YAxis
                domain={[0, 100]}
                tickCount={6}
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                tickFormatter={(v) => `${v}%`}
                axisLine={false}
                tickLine={{ stroke: '#2e2e4a' }}
                width={36}
              />
              <Tooltip
                content={<CustomTooltip isHourly={isHourly} />}
                wrapperStyle={{ outline: 'none' }}
                cursor={{ stroke: '#2e2e4a', strokeDasharray: '4 4' }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '12px' }}
                iconType="line"
                iconSize={10}
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                formatter={(value, entry) => (
                  <span style={{ color: entry.color }}>{value}</span>
                )}
              />
              {period === '1d' ? (
                <>
                  <Area
                    type="monotone"
                    dataKey="value"
                    name="DMK"
                    stroke={PARTY_COLORS['DMK']}
                    strokeWidth={2.5}
                    fill="url(#fill-value)"
                    dot={{ fill: PARTY_COLORS['DMK'], r: 4 }}
                    activeDot={{ r: 5, strokeWidth: 2 }}
                    connectNulls
                    isAnimationActive
                    animationDuration={700}
                    animationEasing="ease-out"
                  />
                </>
              ) : (
                <>
                  {PARTY_KEYS.map((key, i) => (
                    <Area
                      key={key}
                      type="monotone"
                      dataKey={key}
                      name={key}
                      stroke={PARTY_COLORS[key]}
                      strokeWidth={2.5}
                      fill={`url(#fill-${key})`}
                      dot={{ fill: PARTY_COLORS[key], r: 3 }}
                      activeDot={{ r: 5, strokeWidth: 2 }}
                      connectNulls
                      isAnimationActive
                      animationDuration={700}
                      animationEasing="ease-out"
                      animationBegin={i * 60}
                    />
                  ))}
                </>
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
