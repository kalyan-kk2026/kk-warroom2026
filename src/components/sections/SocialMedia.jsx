import { Share2 } from 'lucide-react'
import { socialMediaData } from '../../data/mockData'

const PLATFORMS = [
  { id: 'facebook', name: 'Facebook', color: '#1877f2', bgClass: 'bg-[#1877f2]/15', borderClass: 'border-[#1877f2]/30' },
  { id: 'twitter', name: 'Twitter', color: '#1da1f2', bgClass: 'bg-[#1da1f2]/15', borderClass: 'border-[#1da1f2]/30' },
  { id: 'instagram', name: 'Instagram', color: '#e4405f', bgClass: 'bg-[#e4405f]/15', borderClass: 'border-[#e4405f]/30' },
]

export default function SocialMedia() {
  return (
    <div className="bg-war-panel border border-war-border rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-war-border/90 hover:shadow-lg hover:shadow-black/10 card-hover-lift">
      <div className="px-4 sm:px-5 py-4 border-b border-war-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
          <Share2 className="w-5 h-5 text-war-accent flex-shrink-0" />
          Social media
        </h2>
        <span className="text-war-muted text-xs sm:text-sm">AC-42 · Facebook, Twitter, Instagram</span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {PLATFORMS.map(({ id, name, color, bgClass, borderClass }, i) => {
            const data = socialMediaData[id]
            return (
              <div
                key={id}
                style={{ animationDelay: `${i * 100}ms` }}
                className={`rounded-xl border ${borderClass} bg-war-dark p-4 sm:p-5 ${bgClass} animate-scale-in-bounce card-hover-lift hover:shadow-xl`}
              >
                <p className="text-sm font-semibold text-white mb-4" style={{ color }}>
                  {name}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-war-muted text-xs">Followers</span>
                    <span className="text-white font-bold tabular-nums">{data.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-war-muted text-xs">Engagement (today)</span>
                    <span className="text-white font-semibold tabular-nums">{data.engagement.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-war-muted text-xs">Reposts</span>
                    <span className="text-white font-semibold tabular-nums">{data.reposts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-war-muted text-xs">Likes</span>
                    <span className="text-white font-semibold tabular-nums">{data.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-war-muted text-xs">Posts today</span>
                    <span className="text-war-accent font-semibold tabular-nums">{data.postsToday}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
