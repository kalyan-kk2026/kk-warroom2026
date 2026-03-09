import { UserPlus, UserMinus } from 'lucide-react'
import { boothLeaderLeaving, boothLeaderJoining } from '../../data/mockData'

/** Show first 4 and last 2 digits only, e.g. "98765 43210" → "9876****10" */
function maskContact(contact) {
  if (!contact) return ''
  const digits = String(contact).replace(/\D/g, '')
  if (digits.length <= 6) return contact
  return `${digits.slice(0, 4)}****${digits.slice(-2)}`
}

export default function BoothLeaderSwitch() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {/* Part 1: Possible Leader Defections */}
      <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10 min-w-0">
        <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-wrap items-center gap-2 sm:gap-3">
          <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <UserMinus className="w-5 h-5 text-war-danger transition-transform duration-200 flex-shrink-0" />
            Possible Leader Defections
          </h2>
          <span className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" aria-hidden />
            <span className="text-war-muted text-sm">Live</span>
          </span>
        </div>
        <div className="overflow-y-auto max-h-[280px] sm:max-h-[320px] p-4 sm:p-5">
          <table className="w-full table-fixed">
            <thead className="bg-war-dark sticky top-0 z-10 border-b border-war-border">
              <tr className="text-gray-300 text-xs sm:text-sm border-b border-war-border">
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[18%]">Booth</th>
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[32%]">Leader name</th>
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[26%]">Moving to</th>
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[24%]">Contact</th>
              </tr>
            </thead>
            <tbody>
              {boothLeaderLeaving.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-war-border/50 hover:bg-white/5 transition-colors duration-200"
                >
                  <td className="py-2 sm:py-3 px-2 text-white font-medium text-xs sm:text-sm">
                    {row.booth}
                  </td>
                  <td className="py-2 sm:py-3 px-2 text-gray-300 text-xs sm:text-sm">
                    {row.leaderName}
                  </td>
                  <td className="py-2 sm:py-3 px-2 text-gray-300 text-xs sm:text-sm">
                    {row.moveParty}
                  </td>
                  <td className="py-2 sm:py-3 px-2 text-gray-400 font-mono text-xs">
                    {maskContact(row.contact)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part 2: Potential Leader Inductions */}
      <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10 min-w-0">
        <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-wrap items-center gap-2 sm:gap-3">
          <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-war-success transition-transform duration-200 flex-shrink-0" />
            Potential Leader Inductions
          </h2>
          <span className="flex items-center gap-2 rounded-lg bg-war-dark border border-war-border px-3 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-war-success animate-pulse" aria-hidden />
            <span className="text-war-muted text-sm">Live</span>
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <table className="w-full table-fixed">
            <thead className="bg-war-dark">
              <tr className="text-gray-300 text-xs sm:text-sm border-b border-war-border">
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[18%]">Booth</th>
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[32%]">Leader name</th>
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[26%]">Previous party</th>
                <th className="py-2 sm:py-3 px-2 font-semibold text-left w-[24%]">Contact</th>
              </tr>
            </thead>
            <tbody>
              {boothLeaderJoining.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-war-border/50 hover:bg-white/5 transition-colors duration-200"
                >
                  <td className="py-2 sm:py-3 px-2 text-white font-medium text-xs sm:text-sm">
                    {row.booth}
                  </td>
                  <td className="py-2 sm:py-3 px-2 text-gray-300 text-xs sm:text-sm">
                    {row.leaderName}
                  </td>
                  <td className="py-2 sm:py-3 px-2 text-gray-300 text-xs sm:text-sm">
                    {row.previousParty}
                  </td>
                  <td className="py-2 sm:py-3 px-2 text-gray-400 font-mono text-xs">
                    {maskContact(row.contact)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
