import {
  Users,
  MapPin,
  UserCheck,
  TrendingDown,
  TrendingUp,
  Activity,
  UserPlus,
  CalendarCheck,
  BarChart3,
} from 'lucide-react'
import VoterDataOverview from '../components/sections/VoterDataOverview'
import BoothManagement from '../components/sections/BoothManagement'
import VolunteerManagement from '../components/sections/VolunteerManagement'
import BoothsVoteShareChange from '../components/sections/BoothsVoteShareChange'
import RollingAverage from '../components/sections/RollingAverage'
import BoothWiseTrend from '../components/sections/BoothWiseTrend'
import BoothLeaderSwitch from '../components/sections/BoothLeaderSwitch'
import PollingDay from '../components/sections/PollingDay'
import PollingTracker from '../components/sections/PollingTracker'

/**
 * Single source of truth for dashboard sections.
 * Labels match the section headings in the UI; side nav is built from this.
 */
export const SECTIONS = [
  { id: 'voter', label: 'Voter Data Overview', icon: Users, Component: VoterDataOverview },
  { id: 'rolling-average', label: 'Assembly Level Vote Share Trend', icon: TrendingUp, Component: RollingAverage },
  { id: 'booth-wise-trend', label: 'Booth Level Vote Share Trend', icon: Activity, Component: BoothWiseTrend },
  { id: 'booths-vote-share', label: 'Booths Wise Vote Share Drop & Raise', icon: TrendingDown, Component: BoothsVoteShareChange },
  { id: 'booth', label: 'Booth-Categorisation & Booth Incharges', icon: MapPin, Component: BoothManagement },
  { id: 'volunteer', label: 'Booth level campaign tracker', icon: UserCheck, Component: VolunteerManagement },
  { id: 'leader-switch', label: 'Booth leader switch', icon: UserPlus, Component: BoothLeaderSwitch },
  { id: 'polling', label: 'Election Day Polling Tracker', icon: CalendarCheck, Component: PollingDay },
  { id: 'polling-tracker', label: 'Booth Wise Polling Status', icon: BarChart3, Component: PollingTracker },
]

export const SECTION_IDS = SECTIONS.map((s) => s.id)
