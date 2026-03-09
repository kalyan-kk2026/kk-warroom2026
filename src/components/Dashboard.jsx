import { SECTIONS } from '../config/sections'

export default function Dashboard() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-7xl mx-auto min-w-0">
      <div className="animate-fade-in-down-visible">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Election War Room Dashboard</h1>
        </div>

      {SECTIONS.map(({ id, Component }, i) => (
        <section
          key={id}
          id={id}
          className="scroll-mt-20 sm:scroll-mt-24 animate-fade-in-up-visible"
          style={{ animationDelay: `${80 + i * 50}ms` }}
        >
          <Component />
        </section>
      ))}
    </div>
  )
}
