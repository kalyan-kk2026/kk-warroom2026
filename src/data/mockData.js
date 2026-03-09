// Mock data for War Room Dashboard (frontend-only)
// All data is day-by-day Assembly Constituency (AC) War Room data — AC-42

export const voterOverview = {
  total: 284750,
  male: 148320,
  female: 136100,
  thirdGender: 330,
  ageBreakdown: [
    { range: '18-25', count: 45200, boys: 23800, girls: 21400 },
    { range: '26-35', count: 78100, boys: 41200, girls: 36900 },
    { range: '36-50', count: 98200, boys: 51800, girls: 46400 },
    { range: '50+', count: 63250, boys: 31520, girls: 31730 },
  ],
  newlyAdded: 3420,
  deleted: 180,
  boothCount: 245,
}

export const boothList = [
  { id: 1, name: 'Booth 1', inCharge: 'Rajesh Kumar', contact: '98765 43210', strength: 'Strong', targetVotes: 1200, lastResult: 1180 },
  { id: 2, name: 'Booth 2', inCharge: 'Priya Singh', contact: '98765 43211', strength: 'Medium', targetVotes: 1150, lastResult: 980 },
  { id: 3, name: 'Booth 3', inCharge: 'Amit Verma', contact: '98765 43212', strength: 'Weak', targetVotes: 1100, lastResult: 720 },
  { id: 4, name: 'Booth 4', inCharge: 'Sneha Reddy', contact: '98765 43213', strength: 'Strong', targetVotes: 1250, lastResult: 1220 },
  { id: 5, name: 'Booth 5', inCharge: 'Vikram Joshi', contact: '98765 43214', strength: 'Medium', targetVotes: 1180, lastResult: 1050 },
]

// Volunteer & Cadre: booths segregated by Block Panchayat (villages) vs Urban Local Body
export const volunteerStats = {
  totalActive: 1240,
  todayActivity: 340,
  whatsappCoverage: 92,
  totalBooths: 245,
  boothReportsReceived: 198,
  boothReportsPending: 47,
  // Assembly-level: extent of door-to-door campaign execution (single %)
  assemblyDoorToDoorExecutionPct: 68,
  // Booths by category (Block Panchayat vs Urban Local Body)
  boothsByCategory: [
    { name: 'Block Panchayat', label: 'Block Panchayat (Villages)', booths: 125, volunteers: 520 },
    { name: 'Town Panchayat', label: 'Town Panchayat', booths: 42, volunteers: 180 },
    { name: 'Municipality', label: 'Municipality', booths: 58, volunteers: 320 },
    { name: 'Municipal Corporation', label: 'Municipal Corporation', booths: 20, volunteers: 220 },
  ],
  // Door-to-door execution % by category (for stacked bar: executed + pending = 100)
  doorToDoorExecutionByCategory: [
    { name: 'Block Panchayat', label: 'Block Panchayat (Villages)', executed: 62, pending: 38 },
    { name: 'Town Panchayat', label: 'Town Panchayat', executed: 71, pending: 29 },
    { name: 'Municipality', label: 'Municipality', executed: 74, pending: 26 },
    { name: 'Municipal Corporation', label: 'Municipal Corporation', executed: 78, pending: 22 },
  ],
}

// Social media — Facebook, Twitter, Instagram (AC campaign)
export const socialMediaData = {
  facebook: { followers: 12400, engagement: 3420, postsToday: 6, reposts: 890, likes: 2150 },
  twitter: { followers: 8900, engagement: 2100, postsToday: 12, reposts: 620, likes: 1480 },
  instagram: { followers: 15600, engagement: 4800, postsToday: 4, reposts: 1100, likes: 3700 },
}

export const campaignData = {
  dailySchedule: [
    { time: '09:00', activity: 'Door-to-door - Sector A' },
    { time: '11:00', activity: 'Nukkad meeting - Chowk' },
    { time: '14:00', activity: 'Youth meet - College road' },
    { time: '17:00', activity: 'Roadshow - Main market' },
  ],
  publicMeetings: 24,
  ralliesRoadshows: 12,
  starCampaignerVisits: 5,
  socialMediaEngagement: 45600,
  expenditureUsed: 42,
  expenditureLimit: 100,
}

export const surveyData = {
  sentiment: { positive: 52, neutral: 28, negative: 20 },
  topIssues: ['Water supply', 'Roads', 'Employment', 'Healthcare', 'Education'],
  influentialSupport: 78,
  swingVotersEst: 18500,
}

export const oppositionCandidate = {
  name: 'Opponent Candidate',
  party: 'Rival Party',
  strengths: ['Strong local connect', 'Youth appeal'],
  weaknesses: ['Limited booth network', 'Past controversies'],
  recentActivities: ['Roadshow in Ward 3', 'Social media campaign'],
  boothComparison: { ourLead: 142, opponentLead: 98, tie: 5 },
}

export const complaintsData = {
  total: 48,
  pending: 12,
  resolved: 34,
  critical: 2,
  list: [
    { id: 1, issue: 'Street light not working - Block B', status: 'Pending', priority: 'High' },
    { id: 2, issue: 'Water pipeline leak - Sector 2', status: 'Resolved', priority: 'Critical' },
    { id: 3, issue: 'Garbage dumping - Ward 5', status: 'Pending', priority: 'Medium' },
  ],
}

export const pollingDayData = {
  hourlyTurnout: [
    { hour: '7 AM', pct: 8 },
    { hour: '9 AM', pct: 22 },
    { hour: '11 AM', pct: 38 },
    { hour: '1 PM', pct: 52 },
    { hour: '3 PM', pct: 65 },
    { hour: '5 PM', pct: 78 },
    { hour: '6 PM', pct: 82 },
  ],
  strongBoothTurnout: 85,
  weakBoothTurnout: 62,
  vehiclesAllocated: 45,
  vehiclesTotal: 50,
  callCenterFollowUp: 1200,
  callCenterTarget: 1500,
}

// Polling Tracker — booths by turnout category (booth number + turnout %)
export const pollingTrackerHighTurnout = [
  { boothNumber: 1, turnoutPct: 88 },
  { boothNumber: 4, turnoutPct: 86 },
  { boothNumber: 7, turnoutPct: 85 },
  { boothNumber: 12, turnoutPct: 84 },
  { boothNumber: 18, turnoutPct: 83 },
]
export const pollingTrackerModerateTurnout = [
  { boothNumber: 2, turnoutPct: 72 },
  { boothNumber: 5, turnoutPct: 70 },
  { boothNumber: 8, turnoutPct: 68 },
  { boothNumber: 11, turnoutPct: 65 },
  { boothNumber: 15, turnoutPct: 64 },
]
export const pollingTrackerLowTurnout = [
  { boothNumber: 3, turnoutPct: 48 },
  { boothNumber: 6, turnoutPct: 45 },
  { boothNumber: 9, turnoutPct: 42 },
  { boothNumber: 14, turnoutPct: 40 },
  { boothNumber: 20, turnoutPct: 38 },
]

export const heatmapData = [
  { booth: 'B1', strength: 95 },
  { booth: 'B2', strength: 70 },
  { booth: 'B3', strength: 45 },
  { booth: 'B4', strength: 88 },
  { booth: 'B5', strength: 62 },
  { booth: 'B6', strength: 55 },
  { booth: 'B7', strength: 92 },
  { booth: 'B8', strength: 38 },
  { booth: 'B9', strength: 75 },
  { booth: 'B10', strength: 80 },
]

export const winProbability = 67

export const voteShareBoothReporting = {
  ourPartyName: 'Our Party',
  ourVoteShare: 42,
  opponentShare: 38,
  othersShare: 20,
  boothsReported: 198,
  totalBooths: 245,
  lastUpdated: 'Today, 4:30 PM',
}

// Tamil Nadu 4 parties — DMK, AIADMK, TVK, NTK (hex colors for charts)
export const partyColors = {
  'DMK': '#E41E26',   // Red
  'AIADMK': '#0B9421', // Green
  'TVK': '#1E88E5',   // Blue (Tamilaga Vettri Kazhagam)
  'NTK': '#F59E0B',   // Amber (Naam Tamilar Katchi)
}

// 2021 Assembly election — AC-42 performance (4 parties, side-by-side)
export const electoralPerformance2021 = {
  electionLabel: '2021 Assembly election',
  turnoutPct: 72,
  margin: -8600, // DMK margin vs winner
  parties: [
    { name: 'DMK', voteShare: 38, votes: 108200, color: 'accent' },
    { name: 'AIADMK', voteShare: 41, votes: 116800, color: 'danger' },
    { name: 'TVK', voteShare: 14, votes: 39800, color: 'success' },
    { name: 'NTK', voteShare: 7, votes: 19950, color: 'muted' },
  ],
}

// Day-by-day; rolling average computed in component by period (1d / 3d / 7d)
export const rollingAverageData = [
  { day: 'Day 1', date: '22 Feb', value: 38 },
  { day: 'Day 2', date: '23 Feb', value: 40 },
  { day: 'Day 3', date: '24 Feb', value: 41 },
  { day: 'Day 4', date: '25 Feb', value: 39 },
  { day: 'Day 5', date: '26 Feb', value: 42 },
  { day: 'Day 6', date: '27 Feb', value: 43 },
  { day: 'Day 7', date: '28 Feb', value: 41 },
  { day: 'Day 8', date: '1 Mar', value: 44 },
  { day: 'Day 9', date: '2 Mar', value: 42 },
  { day: 'Day 10', date: '3 Mar', value: 43 },
  { day: 'Day 11', date: '4 Mar', value: 45 },
  { day: 'Day 12', date: '5 Mar', value: 44 },
]

// Four parties — DMK, AIADMK, TVK, NTK — daily vote share % for rolling average chart
export const rollingAverageDataFourParties = [
  { day: 'Day 1', date: '22 Feb', DMK: 36, AIADMK: 40, TVK: 15, NTK: 9 },
  { day: 'Day 2', date: '23 Feb', DMK: 38, AIADMK: 39, TVK: 15, NTK: 8 },
  { day: 'Day 3', date: '24 Feb', DMK: 39, AIADMK: 40, TVK: 14, NTK: 7 },
  { day: 'Day 4', date: '25 Feb', DMK: 37, AIADMK: 41, TVK: 14, NTK: 8 },
  { day: 'Day 5', date: '26 Feb', DMK: 40, AIADMK: 39, TVK: 14, NTK: 7 },
  { day: 'Day 6', date: '27 Feb', DMK: 41, AIADMK: 38, TVK: 14, NTK: 7 },
  { day: 'Day 7', date: '28 Feb', DMK: 40, AIADMK: 39, TVK: 13, NTK: 8 },
  { day: 'Day 8', date: '1 Mar', DMK: 42, AIADMK: 38, TVK: 13, NTK: 7 },
  { day: 'Day 9', date: '2 Mar', DMK: 41, AIADMK: 39, TVK: 13, NTK: 7 },
  { day: 'Day 10', date: '3 Mar', DMK: 42, AIADMK: 38, TVK: 13, NTK: 7 },
  { day: 'Day 11', date: '4 Mar', DMK: 44, AIADMK: 37, TVK: 12, NTK: 7 },
  { day: 'Day 12', date: '5 Mar', DMK: 43, AIADMK: 38, TVK: 12, NTK: 7 },
]

// Booth-wise trend day by day — vote share % (or trend) per booth per day
export const boothWiseTrendDayByDay = [
  { day: 'Day 1', date: '22 Feb', 'Booth 1': 44, 'Booth 2': 38, 'Booth 3': 35, 'Booth 4': 46, 'Booth 5': 41 },
  { day: 'Day 2', date: '23 Feb', 'Booth 1': 45, 'Booth 2': 39, 'Booth 3': 36, 'Booth 4': 47, 'Booth 5': 42 },
  { day: 'Day 3', date: '24 Feb', 'Booth 1': 45, 'Booth 2': 40, 'Booth 3': 37, 'Booth 4': 46, 'Booth 5': 43 },
  { day: 'Day 4', date: '25 Feb', 'Booth 1': 44, 'Booth 2': 39, 'Booth 3': 36, 'Booth 4': 48, 'Booth 5': 42 },
  { day: 'Day 5', date: '26 Feb', 'Booth 1': 46, 'Booth 2': 41, 'Booth 3': 38, 'Booth 4': 47, 'Booth 5': 43 },
  { day: 'Day 6', date: '27 Feb', 'Booth 1': 47, 'Booth 2': 40, 'Booth 3': 37, 'Booth 4': 49, 'Booth 5': 44 },
  { day: 'Day 7', date: '28 Feb', 'Booth 1': 46, 'Booth 2': 42, 'Booth 3': 39, 'Booth 4': 48, 'Booth 5': 43 },
  { day: 'Day 8', date: '1 Mar', 'Booth 1': 48, 'Booth 2': 43, 'Booth 3': 40, 'Booth 4': 50, 'Booth 5': 45 },
  { day: 'Day 9', date: '2 Mar', 'Booth 1': 47, 'Booth 2': 42, 'Booth 3': 39, 'Booth 4': 49, 'Booth 5': 44 },
  { day: 'Day 10', date: '3 Mar', 'Booth 1': 48, 'Booth 2': 44, 'Booth 3': 41, 'Booth 4': 50, 'Booth 5': 45 },
  { day: 'Day 11', date: '4 Mar', 'Booth 1': 49, 'Booth 2': 44, 'Booth 3': 42, 'Booth 4': 51, 'Booth 5': 46 },
  { day: 'Day 12', date: '5 Mar', 'Booth 1': 48, 'Booth 2': 45, 'Booth 3': 41, 'Booth 4': 50, 'Booth 5': 45 },
]

// Per-booth, day-by-day vote share by party (DMK, AIADMK, TVK, NTK) — for Booth-wise trend search
const DAYS_12 = [
  { day: 'Day 1', date: '22 Feb' }, { day: 'Day 2', date: '23 Feb' }, { day: 'Day 3', date: '24 Feb' },
  { day: 'Day 4', date: '25 Feb' }, { day: 'Day 5', date: '26 Feb' }, { day: 'Day 6', date: '27 Feb' },
  { day: 'Day 7', date: '28 Feb' }, { day: 'Day 8', date: '1 Mar' }, { day: 'Day 9', date: '2 Mar' },
  { day: 'Day 10', date: '3 Mar' }, { day: 'Day 11', date: '4 Mar' }, { day: 'Day 12', date: '5 Mar' },
]
// Each booth: 12 rows with DMK, AIADMK, TVK, NTK (vote share %)
export const boothPartyTrendByBooth = {
  '1': DAYS_12.map((d, i) => ({ ...d, DMK: 36 + i, AIADMK: 40 - (i % 2), TVK: 14, NTK: 10 - (i % 3) })),
  '2': DAYS_12.map((d, i) => ({ ...d, DMK: 35 + (i % 2), AIADMK: 39 + i * 0.5, TVK: 15, NTK: 8 })),
  '3': DAYS_12.map((d, i) => ({ ...d, DMK: 40 + i, AIADMK: 34 - (i % 2), TVK: 14, NTK: 9 })),
  '4': DAYS_12.map((d, i) => ({ ...d, DMK: 37 + (i % 3), AIADMK: 38, TVK: 15, NTK: 7 })),
  '5': DAYS_12.map((d, i) => ({ ...d, DMK: 39 + i * 0.8, AIADMK: 35, TVK: 14, NTK: 8 })),
  '6': DAYS_12.map((d, i) => ({ ...d, DMK: 36, AIADMK: 40 + (i % 2), TVK: 13, NTK: 8 })),
  '7': DAYS_12.map((d, i) => ({ ...d, DMK: 41 - (i % 2), AIADMK: 35 + i * 0.3, TVK: 13, NTK: 7 })),
  '8': DAYS_12.map((d, i) => ({ ...d, DMK: 34 + i, AIADMK: 41, TVK: 12, NTK: 9 })),
  '9': DAYS_12.map((d, i) => ({ ...d, DMK: 42 - (i % 3) * 0.5, AIADMK: 33 + i, TVK: 14, NTK: 6 })),
  '10': DAYS_12.map((d, i) => ({ ...d, DMK: 38, AIADMK: 37 + (i % 2), TVK: 14, NTK: 8 })),
}

// 1-day view: hourly data (x-axis shows 1h, 2h, ...)
export const rollingAverageHourlyData = [
  { hour: '1h', value: 40 },
  { hour: '2h', value: 41 },
  { hour: '3h', value: 39 },
  { hour: '4h', value: 42 },
  { hour: '5h', value: 43 },
  { hour: '6h', value: 41 },
  { hour: '7h', value: 44 },
  { hour: '8h', value: 42 },
  { hour: '9h', value: 43 },
  { hour: '10h', value: 45 },
  { hour: '11h', value: 44 },
  { hour: '12h', value: 43 },
]

// Booths where vote share fell vs increased (vs previous period)
export const boothsVoteShareFell = [
  { id: 1, booth: 'Booth 3', change: -2.4, prevShare: 44, currentShare: 41.6 },
  { id: 2, booth: 'Booth 8', change: -1.8, prevShare: 42, currentShare: 40.2 },
  { id: 3, booth: 'Booth 12', change: -1.2, prevShare: 48, currentShare: 46.8 },
  { id: 4, booth: 'Booth 15', change: -0.9, prevShare: 45, currentShare: 44.1 },
  { id: 5, booth: 'Booth 22', change: -0.6, prevShare: 39, currentShare: 38.4 },
]

export const boothsVoteShareIncreased = [
  { id: 1, booth: 'Booth 1', change: 2.2, prevShare: 46, currentShare: 48.2 },
  { id: 2, booth: 'Booth 5', change: 1.9, prevShare: 41, currentShare: 42.9 },
  { id: 3, booth: 'Booth 7', change: 1.5, prevShare: 43, currentShare: 44.5 },
  { id: 4, booth: 'Booth 11', change: 1.2, prevShare: 40, currentShare: 41.2 },
  { id: 5, booth: 'Booth 18', change: 0.8, prevShare: 44, currentShare: 44.8 },
]

// Issues & incidents reported — list and data for graph
export const issuesIncidentsList = [
  { id: 1, date: '1 Mar', type: 'Booth', description: 'EVM delay - Booth 12', status: 'Resolved', booth: 'Booth 12' },
  { id: 2, date: '1 Mar', type: 'Security', description: 'Argument near polling station Ward 2', status: 'Resolved', booth: 'Ward 2' },
  { id: 3, date: '2 Mar', type: 'Booth', description: 'Missing ink - Booth 5', status: 'Pending', booth: 'Booth 5' },
  { id: 4, date: '2 Mar', type: 'Voter', description: 'ID not accepted - Booth 8', status: 'Resolved', booth: 'Booth 8' },
  { id: 5, date: '3 Mar', type: 'Booth', description: 'Queue dispute - Booth 3', status: 'Resolved', booth: 'Booth 3' },
  { id: 6, date: '3 Mar', type: 'Security', description: 'Unauthorized person at gate', status: 'Resolved', booth: 'Booth 1' },
  { id: 7, date: '4 Mar', type: 'Voter', description: 'Name missing in list - Booth 15', status: 'Pending', booth: 'Booth 15' },
  { id: 8, date: '4 Mar', type: 'Booth', description: 'Ballot unit replacement', status: 'Resolved', booth: 'Booth 7' },
]

// Aggregated for graph: issues by date (same data shown in graph)
export const issuesIncidentsByDate = [
  { date: '1 Mar', count: 2, resolved: 2, pending: 0 },
  { date: '2 Mar', count: 2, resolved: 1, pending: 1 },
  { date: '3 Mar', count: 2, resolved: 2, pending: 0 },
  { date: '4 Mar', count: 2, resolved: 1, pending: 1 },
]

// By type for graph
export const issuesIncidentsByType = [
  { type: 'Booth', count: 4 },
  { type: 'Security', count: 2 },
  { type: 'Voter', count: 2 },
]

// TN election: Booth leader switch — split into leaving vs joining
// Part 1: Person leaving our party to join the opposite party / Leader switching from our party to the opposition party
export const boothLeaderLeaving = [
  { id: 1, booth: 'Booth 5', leaderName: 'M. Lakshmi', moveParty: 'AIADMK', status: 'May switch to other party', contact: '98765 43214' },
  { id: 2, booth: 'Booth 9', leaderName: 'P. Kannan', moveParty: '—', status: 'Under watch', contact: '98765 43218' },
  { id: 3, booth: 'Booth 15', leaderName: 'V. Gopal', moveParty: 'NTK', status: 'May switch to other party', contact: '98765 43222' },
]

// Part 2: Leaders from other parties joining our party
export const boothLeaderJoining = [
  { id: 1, booth: 'Booth 1', leaderName: 'R. Suresh', previousParty: 'AIADMK', status: 'Joined our party', contact: '98765 43210' },
  { id: 2, booth: 'Booth 3', leaderName: 'K. Murugan', previousParty: 'NTK', status: 'Joined our party', contact: '98765 43212' },
  { id: 3, booth: 'Booth 7', leaderName: 'S. Rajan', previousParty: 'TVK', status: 'Joined our party', contact: '98765 43216' },
  { id: 4, booth: 'Booth 12', leaderName: 'T. Devi', previousParty: 'AIADMK', status: 'Joined our party', contact: '98765 43220' },
]
