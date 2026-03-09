import { useState, useMemo, useEffect } from 'react'
import { Activity, Search } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid } from 'recharts'
import { boothPartyTrendByBooth, partyColors } from '../../data/mockData'

const PARTY_KEYS = ['DMK', 'AIADMK', 'TVK', 'NTK']

const PERIODS = [
  { id: '1d', label: '1 day' },
  { id: '3d', label: '3 days' },
  { id: '7d', label: '7 days' },
]

function XAxisTickWithHover({ x, y, payload, data }) {
  const day = payload?.value ?? ''
  const row = data?.find((d) => d.day === day)
  const date = row?.date ?? ''
  return (
    <g transform={`translate(${x},${y})`} className="x-axis-tick-group">
      <text
        x={0}
        y={0}
        dy={8}
        textAnchor="middle"
        fill="#94a3b8"
        fontSize={11}
        className="x-axis-tick-hover"
      >
        <title>Date: {date}</title>
        {day}
      </text>
    </g>
  )
}

function CustomTooltip({ active, payload, label, data }) {
  if (!active || !payload?.length) return null
  const row = data?.find((d) => d.day === label)
  return (
    <div className="rounded-lg border border-war-border bg-war-panel px-3 py-2.5 shadow-xl min-w-[140px]">
      <p className="text-war-muted text-xs font-medium mb-2 border-b border-war-border pb-1.5">
        {label}{row ? ` (${row.date})` : ''}
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

export default function BoothWiseTrend() {
  const [boothNumber, setBoothNumber] = useState('1')
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
    const key = String(boothNumber).trim() || '1'
    const raw = boothPartyTrendByBooth[key] ?? boothPartyTrendByBooth['1']
    const days = period === '1d' ? 1 : period === '3d' ? 3 : 7
    return raw.slice(-days)
  }, [boothNumber, period])

  const validBooth = useMemo(() => {
    const key = String(boothNumber).trim() || '1'
    return key in boothPartyTrendByBooth
  }, [boothNumber])

  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-war-accent transition-transform duration-200 flex-shrink-0" />
            Booth Level Vote Share Trend
          </h2>
          <span className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" aria-hidden />
            <span className="text-war-muted text-sm">Live</span>
          </span>
          <span className="text-war-muted text-xs sm:text-sm">
            Last updated: {lastUpdated}
          </span>
        </div>
        <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-3">
          <label className="relative flex items-center gap-2 flex-shrink-0">
            <Search className="w-4 h-4 text-war-muted flex-shrink-0" />
            <input
              type="text"
              inputMode="numeric"
              placeholder="Booth number"
              value={boothNumber}
              onChange={(e) => setBoothNumber(e.target.value.replace(/\D/g, '').slice(0, 4))}
              className="w-32 sm:w-40 pl-9 pr-3 py-2 rounded-lg bg-war-dark border border-war-border text-white text-sm placeholder:text-war-muted focus:outline-none focus:ring-1 focus:ring-war-accent focus:border-war-accent"
            />
          </label>
          <div className="flex rounded-lg bg-war-dark border border-war-border p-1 flex-shrink-0">
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
      </div>
      <div className="p-4 sm:p-5">
        {!validBooth && boothNumber.trim() !== '' && (
          <p className="text-war-danger text-xs mb-2">
            Booth {boothNumber} not found. Showing Booth 1. Try 1–10.
          </p>
        )}
        <div className="h-[240px] sm:h-[300px] min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 16, right: 16, left: 8, bottom: 8 }}
              animationDuration={700}
              animationEasing="ease-out"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2e2e4a" vertical={false} />
              <XAxis
                dataKey="day"
                tick={<XAxisTickWithHover data={chartData} />}
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
                content={<CustomTooltip data={chartData} />}
                wrapperStyle={{ outline: 'none' }}
                cursor={{ stroke: '#2e2e4a', strokeDasharray: '4 4' }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '12px' }}
                iconType="line"
                iconSize={10}
                formatter={(value, entry) => (
                  <span style={{ color: entry.color }}>{value}</span>
                )}
              />
              {PARTY_KEYS.map((key, i) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={key}
                  stroke={partyColors[key]}
                  strokeWidth={2.5}
                  dot={{ fill: partyColors[key], r: 3 }}
                  activeDot={{ r: 5, strokeWidth: 2 }}
                  connectNulls
                  isAnimationActive
                  animationDuration={700}
                  animationEasing="ease-out"
                  animationBegin={i * 60}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
