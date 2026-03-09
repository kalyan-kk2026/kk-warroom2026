import { BarChart3, PieChart as PieIcon, LineChart as LineIcon, Map } from 'lucide-react'
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts'
import { voterOverview, heatmapData, campaignData } from '../../data/mockData'

const GENDER_COLORS = ['#a78bfa', '#38bdf8', '#4ade80']
const HEAT_COLORS = ['#fb7185', '#a78bfa', '#4ade80']

function getHeatColor(v) {
  if (v >= 80) return HEAT_COLORS[2]
  if (v >= 50) return HEAT_COLORS[1]
  return HEAT_COLORS[0]
}

const trendData = [
  { week: 'W1', meetings: 4, rallies: 1 },
  { week: 'W2', meetings: 8, rallies: 2 },
  { week: 'W3', meetings: 14, rallies: 4 },
  { week: 'W4', meetings: 20, rallies: 6 },
  { week: 'W5', meetings: 24, rallies: 12 },
]

export default function DataVisualization() {
  const genderData = [
    { name: 'Male', value: voterOverview.male },
    { name: 'Female', value: voterOverview.female },
    { name: 'Third', value: voterOverview.thirdGender },
  ]

  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-5 py-4 border-b border-war-border">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-war-accent" />
          Data Visualization
        </h2>
        <p className="text-war-muted text-sm mt-1">AC-42 · Day-by-day · Pie • Bar • Line • Heat map</p>
      </div>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-war-muted text-sm mb-2 flex items-center gap-2">
            <PieIcon className="w-4 h-4" />
            Pie chart — Voter segmentation (gender)
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {genderData.map((_, i) => (
                  <Cell key={i} fill={GENDER_COLORS[i % GENDER_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v) => v.toLocaleString()}
                contentStyle={{ backgroundColor: '#131d33', border: '1px solid #1e3a5f', borderRadius: '8px', color: '#e2e8f0' }}
                wrapperStyle={{ outline: 'none' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="text-war-muted text-sm mb-2 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Bar chart — Booth performance (strength score)
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={heatmapData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
              <XAxis dataKey="booth" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#131d33', border: '1px solid #1e3a5f', borderRadius: '8px', color: '#e2e8f0' }}
                wrapperStyle={{ outline: 'none' }}
                cursor={{ fill: 'rgba(30, 58, 95, 0.25)', stroke: '#1e3a5f' }}
              />
              <Bar dataKey="strength" name="Strength %" radius={[4, 4, 0, 0]}>
                {heatmapData.map((entry, i) => (
                  <Cell key={i} fill={getHeatColor(entry.strength)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:col-span-2">
          <p className="text-war-muted text-sm mb-2 flex items-center gap-2">
            <LineIcon className="w-4 h-4" />
            Line graph — Campaign growth trend
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={trendData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
              <XAxis dataKey="week" tick={{ fill: '#94a3b8' }} />
              <YAxis tick={{ fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ backgroundColor: '#131d33', border: '1px solid #1e3a5f', borderRadius: '8px', color: '#e2e8f0' }} wrapperStyle={{ outline: 'none' }} />
              <Legend />
              <Line type="monotone" dataKey="meetings" stroke="#a78bfa" strokeWidth={2} name="Meetings" dot={{ fill: '#a78bfa' }} />
              <Line type="monotone" dataKey="rallies" stroke="#4ade80" strokeWidth={2} name="Rallies" dot={{ fill: '#4ade80' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:col-span-2">
          <p className="text-war-muted text-sm mb-2 flex items-center gap-2">
            <Map className="w-4 h-4" />
            Heat map — Strong / weak areas (booth strength)
          </p>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {heatmapData.map((d) => (
              <div
                key={d.booth}
                className="aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-mono"
                style={{
                  backgroundColor: getHeatColor(d.strength) + '40',
                  borderColor: getHeatColor(d.strength),
                  borderWidth: '1px',
                }}
              >
                <span className="text-gray-200">{d.booth}</span>
                <span className="text-gray-400">{d.strength}%</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-war-danger/60 border border-war-danger" />
              Weak
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-war-accent/60 border border-war-accent" />
              Medium
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-war-success/60 border border-war-success" />
              Strong
            </span>
          </div>
        </div>
        <div className="lg:col-span-2 flex items-center gap-4 rounded-lg bg-war-dark border border-war-border p-4">
          <div className="w-12 h-12 rounded-full bg-war-accent/20 flex items-center justify-center">
            <span className="text-war-accent font-bold text-lg">LIVE</span>
          </div>
          <div>
            <p className="text-white font-medium">Real-time progress indicators</p>
            <p className="text-war-muted text-sm">Data refreshes automatically; live sync status in header</p>
          </div>
        </div>
      </div>
    </div>
  )
}
