import { Users } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { voterOverview, electoralPerformance2021, partyColors } from '../../data/mockData'

const total = voterOverview.total
const malePct = ((voterOverview.male / total) * 100).toFixed(1)
const femalePct = ((voterOverview.female / total) * 100).toFixed(1)

const BOYS_COLOR = '#38bdf8'
const GIRLS_COLOR = '#fb7185'

export default function VoterDataOverview() {
  const stats = [
    { label: 'Total voters', value: voterOverview.total.toLocaleString(), highlight: true },
    { label: 'Male', value: voterOverview.male.toLocaleString(), sub: `${malePct}%` },
    { label: 'Female', value: voterOverview.female.toLocaleString(), sub: `${femalePct}%` },
    { label: 'Third gender', value: voterOverview.thirdGender },
    { label: 'Newly added', value: `+${voterOverview.newlyAdded.toLocaleString()}`, color: 'text-war-success' },
    { label: 'Deleted', value: `−${voterOverview.deleted}`, color: 'text-war-danger' },
    { label: 'Booths', value: voterOverview.boothCount },
  ]

  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-war-accent transition-transform duration-200 flex-shrink-0" />
          Voter Data Overview
        </h2>
       
      </div>

      <div className="p-4 sm:p-5">
        {/* Stats strip — card grid with spacing and hierarchy */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-2 sm:gap-3 mb-4 sm:mb-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-xl border bg-war-dark border-war-border px-3 py-3 sm:px-4 sm:py-4 min-w-0 flex flex-col justify-center transition-all duration-200 hover:border-war-border/80 hover:bg-war-panel/60 ${
                s.highlight ? 'border-l-4 border-l-war-accent lg:col-span-2' : ''
              }`}
            >
              <p className="text-war-muted text-xs font-medium uppercase tracking-wider truncate">{s.label}</p>
              <p
                className={`mt-1 font-mono truncate ${
                  s.highlight ? 'text-xl sm:text-2xl text-white' : 'text-sm sm:text-base text-white'
                } ${s.color ?? ''}`}
              >
                {s.value}
              </p>
              {s.sub && <p className="text-war-muted text-xs mt-0.5">{s.sub}</p>}
            </div>
          ))}
        </div>

        {/* Age-wise breakdown — male and female per age range */}
        <div className="rounded-lg bg-war-dark border border-war-border p-4 sm:p-5">
          <p className="text-war-muted text-xs sm:text-sm font-medium mb-4">Age-wise breakdown (Male & Female)</p>
          <div className="h-48 sm:h-60 min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={voterOverview.ageBreakdown}
              layout="vertical"
              margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
              barCategoryGap="12%"
              barGap={4}
              animationDuration={600}
              animationEasing="ease-out"
            >
              <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(v) => `${v / 1000}k`} />
              <YAxis
                type="category"
                dataKey="range"
                width={52}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                tickFormatter={(v) => v}
              />
              <Tooltip
                formatter={(v, name) => [v.toLocaleString(), name]}
                contentStyle={{
                  backgroundColor: '#131d33',
                  border: '1px solid #1e3a5f',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                }}
                wrapperStyle={{ outline: 'none' }}
                labelFormatter={(label) => `Age ${label}`}
                cursor={{ fill: 'rgba(30, 58, 95, 0.2)' }}
              />
              <Legend wrapperStyle={{ paddingTop: '8px' }} iconType="square" iconSize={10} />
              <Bar dataKey="boys" name="Male" stackId="a" fill={BOYS_COLOR} radius={[0, 4, 4, 0]} maxBarSize={28} isAnimationActive animationDuration={600} animationEasing="ease-out" />
              <Bar dataKey="girls" name="Female" stackId="a" fill={GIRLS_COLOR} radius={[0, 4, 4, 0]} maxBarSize={28} isAnimationActive animationDuration={600} animationEasing="ease-out" animationBegin={100} />
            </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2021 Electoral Performance — 4 parties side by side */}
        <div className="rounded-lg bg-war-dark border border-war-border p-4 sm:p-5 mt-4 sm:mt-6">
          <p className="text-war-muted text-xs sm:text-sm font-medium mb-1">2021 Electoral Performance</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4">
            {electoralPerformance2021.parties.map((party) => {
              const partyColor = partyColors[party.name] ?? '#94a3b8'
              return (
                <div
                  key={party.name}
                  className="rounded-xl border border-war-border bg-war-panel/50 p-4 border-l-4"
                  style={{ borderLeftColor: partyColor }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ color: partyColor }}
                  >
                    {party.name}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-gray-400 text-sm">Vote share</span>
                      <span className="text-xl font-bold tabular-nums" style={{ color: partyColor }}>
                        {party.voteShare}%
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-gray-400 text-sm">Votes secured</span>
                      <span className="text-lg font-semibold text-white tabular-nums">{party.votes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-war-border">
            <div className="rounded-lg bg-war-panel border border-war-border px-4 py-3 flex justify-between items-center">
              <span className="text-gray-400 text-sm">Margin (DMK vs winner)</span>
              <span className={`font-semibold tabular-nums ${electoralPerformance2021.margin >= 0 ? 'text-war-success' : 'text-war-danger'}`}>
                {electoralPerformance2021.margin >= 0 ? '+' : ''}{electoralPerformance2021.margin.toLocaleString()} votes
              </span>
            </div>
            <div className="rounded-lg bg-war-panel border border-war-border px-4 py-3 flex justify-between items-center">
              <span className="text-gray-400 text-sm">Turnout</span>
              <span className="font-semibold text-white tabular-nums">{electoralPerformance2021.turnoutPct}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
