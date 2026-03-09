import { AlertTriangle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from 'recharts'
import { issuesIncidentsList, issuesIncidentsByDate } from '../../data/mockData'

export default function IssuesIncidentsReported() {
  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-5 py-4 border-b border-war-border flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-war-accent transition-transform duration-200" />
          Issues & incidents reported
        </h2>
        <span className="text-war-muted text-sm">AC-42 · Day-by-day · {issuesIncidentsList.length} reported</span>
      </div>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-war-muted text-sm mb-2">Reported issues — detail</p>
          <div className="overflow-x-auto rounded-lg border border-war-border">
            <table className="w-full min-w-[420px]">
              <thead>
                <tr className="text-left text-war-muted text-xs border-b border-war-border bg-war-dark/50">
                  <th className="px-3 py-2.5 font-medium">Date</th>
                  <th className="px-3 py-2.5 font-medium">Type</th>
                  <th className="px-3 py-2.5 font-medium">Description</th>
                  <th className="px-3 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {issuesIncidentsList.map((row) => (
                  <tr key={row.id} className="border-b border-war-border/50 hover:bg-white/5">
                    <td className="px-3 py-2.5 text-gray-300 text-sm">{row.date}</td>
                    <td className="px-3 py-2.5 text-gray-300 text-sm">{row.type}</td>
                    <td className="px-3 py-2.5 text-gray-300 text-sm">{row.description}</td>
                    <td className="px-3 py-2.5">
                      <span
                        className={`text-xs font-medium ${
                          row.status === 'Resolved' ? 'text-war-success' : 'text-war-accent'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="text-war-muted text-sm mb-2">Issues & incidents by date (graph)</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={issuesIncidentsByDate} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
              <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <YAxis allowDecimals={false} tick={{ fill: '#94a3b8' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#131d33',
                  border: '1px solid #1e3a5f',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                }}
                wrapperStyle={{ outline: 'none' }}
                cursor={{ fill: 'rgba(30, 58, 95, 0.25)', stroke: '#1e3a5f' }}
                formatter={(value, name) => [value, name]}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Legend />
              <Bar dataKey="resolved" name="Resolved" fill="#4ade80" radius={[4, 4, 0, 0]} stackId="a" />
              <Bar dataKey="pending" name="Pending" fill="#64748b" radius={[4, 4, 0, 0]} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-war-muted text-xs mt-2">Same data as table — aggregated by date.</p>
        </div>
      </div>
    </div>
  )
}
