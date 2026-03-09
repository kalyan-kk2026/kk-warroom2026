import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { boothList } from '../../data/mockData'

const strengthColor = (s) => (s === 'Strong' ? 'text-war-success' : s === 'Medium' ? 'text-war-accent' : 'text-war-danger')

// Active button background matches Categorisation color for that row
const categoryActiveClass = (cat) =>
  cat === 'Strong'
    ? 'bg-war-success text-white'
    : cat === 'Medium'
      ? 'bg-war-accent text-war-dark'
      : 'bg-war-danger text-white'

const CATEGORIES = ['Strong', 'Medium', 'Weak']

export default function BoothManagement() {
  const [categorisationFilter, setCategorisationFilter] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBooths = boothList
    .filter((b) => !categorisationFilter || b.strength === categorisationFilter)
    .filter((b) => !searchQuery.trim() || b.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))

  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-3">
        <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
          <MapPin className="w-5 h-5 text-war-accent transition-transform duration-200 flex-shrink-0" />
          <span className="break-words">Booth-Categorisation & Booth Incharges</span>
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
          <label className="relative flex items-center min-w-0">
            <Search className="absolute left-3 w-4 h-4 text-war-muted pointer-events-none flex-shrink-0" />
            <input
              type="text"
              placeholder="Booth number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-w-0 sm:w-56 lg:w-64 pl-9 pr-3 py-2 sm:py-1.5 rounded-lg bg-war-dark border border-war-border text-white text-sm placeholder:text-war-muted focus:outline-none focus:ring-1 focus:ring-war-accent focus:border-war-accent transition-all duration-200"
            />
          </label>
          <div className="flex rounded-lg bg-war-dark border border-war-border p-1 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategorisationFilter(categorisationFilter === cat ? null : cat)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  categorisationFilter === cat
                    ? categoryActiveClass(cat)
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5 overflow-x-auto -mx-4 sm:mx-0 px-4">
        <table className="w-full min-w-[400px] sm:min-w-[500px] table-fixed">
          <thead className="bg-war-dark">
            <tr className="text-gray-300 text-xs sm:text-sm border-b border-war-border">
              <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold text-center w-[15%]">Booth</th>
              <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold text-center w-[18%]">Categorisation</th>
              <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold text-center w-[35%]">In-charge</th>
              <th className="py-2 sm:py-3 px-1 sm:px-2 font-semibold text-center w-[32%]">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooths.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 sm:py-8 text-center text-war-muted text-sm">
                  No booths match the current filter or search. Clear the search and try again.
                </td>
              </tr>
            ) : (
              filteredBooths.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-war-border/50 hover:bg-white/5 transition-colors duration-200"
                >
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-white font-medium text-xs sm:text-sm">{b.name}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center">
                    <span className={`font-medium text-xs sm:text-sm ${strengthColor(b.strength)}`}>{b.strength}</span>
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-gray-300 text-xs sm:text-sm truncate" title={b.inCharge}>{b.inCharge}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-center text-gray-400 font-mono text-xs">{b.contact}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
