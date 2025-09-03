import { Team, Player, Match, League, LeagueTable, NewsArticle, Event } from './types';

// Mock Teams Data
export const teams: Team[] = [
  {
    id: 'team-1',
    name: 'Manchester United',
    shortName: 'MUN',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5aa7f8c-1057-4f3e-a3fd-943917851fc2.png',
    colors: { primary: '#DA020E', secondary: '#FBE122' },
    stadium: 'Old Trafford',
    founded: 1878,
    country: 'England'
  },
  {
    id: 'team-2',
    name: 'Liverpool FC',
    shortName: 'LIV',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9297180-e869-4f54-affc-16cd4170b475.png',
    colors: { primary: '#C8102E', secondary: '#F6EB61' },
    stadium: 'Anfield',
    founded: 1892,
    country: 'England'
  },
  {
    id: 'team-3',
    name: 'Chelsea FC',
    shortName: 'CHE',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/74e77605-07af-4209-a2af-b3e40312fbe2.png',
    colors: { primary: '#034694', secondary: '#FFFFFF' },
    stadium: 'Stamford Bridge',
    founded: 1905,
    country: 'England'
  },
  {
    id: 'team-4',
    name: 'Arsenal FC',
    shortName: 'ARS',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/225bb025-d5c4-4d78-8bfe-1b3e61b3bb55.png',
    colors: { primary: '#EF0107', secondary: '#FFFFFF' },
    stadium: 'Emirates Stadium',
    founded: 1886,
    country: 'England'
  },
  {
    id: 'team-5',
    name: 'Manchester City',
    shortName: 'MCI',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16144239-46da-4358-968e-12bafe445291.png',
    colors: { primary: '#6CABDD', secondary: '#1C2C5B' },
    stadium: 'Etihad Stadium',
    founded: 1880,
    country: 'England'
  },
  {
    id: 'team-6',
    name: 'Tottenham Hotspur',
    shortName: 'TOT',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75ece97e-369a-4077-9842-d3d3ca86ef0f.png',
    colors: { primary: '#132257', secondary: '#FFFFFF' },
    stadium: 'Tottenham Hotspur Stadium',
    founded: 1882,
    country: 'England'
  }
];

// Mock Players Data
export const players: Player[] = [
  {
    id: 'player-1',
    name: 'Marcus Rashford',
    position: 'FWD',
    number: 10,
    age: 26,
    nationality: 'England',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58c807b6-7d73-4feb-a19c-a856dfaf7c58.png',
    stats: { goals: 18, assists: 8, yellowCards: 3, redCards: 0, appearances: 32 },
    teamId: 'team-1'
  },
  {
    id: 'player-2',
    name: 'Mohamed Salah',
    position: 'FWD',
    number: 11,
    age: 31,
    nationality: 'Egypt',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69844cc0-2994-4ef0-84fa-9e153285da18.png',
    stats: { goals: 24, assists: 12, yellowCards: 2, redCards: 0, appearances: 35 },
    teamId: 'team-2'
  },
  {
    id: 'player-3',
    name: 'Erling Haaland',
    position: 'FWD',
    number: 9,
    age: 23,
    nationality: 'Norway',
    photo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61adae52-c0a0-4376-b8be-c9612fd9f357.png',
    stats: { goals: 31, assists: 5, yellowCards: 1, redCards: 0, appearances: 33 },
    teamId: 'team-5'
  }
];

// Mock League Data
export const leagues: League[] = [
  {
    id: 'premier-league',
    name: 'Premier League',
    country: 'England',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/12a2e155-ff01-4640-9f78-638bdab70162.png',
    season: '2023-24',
    teams: teams
  }
];

// Mock Matches Data
export const matches: Match[] = [
  {
    id: 'match-1',
    homeTeam: teams[0], // Manchester United
    awayTeam: teams[1], // Liverpool
    date: new Date('2024-01-15T15:00:00'),
    venue: 'Old Trafford',
    status: 'upcoming',
    leagueId: 'premier-league',
    round: 21,
    ticketPrice: { standard: 45, premium: 85, vip: 150 },
    availableTickets: 1250
  },
  {
    id: 'match-2',
    homeTeam: teams[2], // Chelsea
    awayTeam: teams[3], // Arsenal
    date: new Date('2024-01-13T17:30:00'),
    venue: 'Stamford Bridge',
    status: 'live',
    score: { home: 2, away: 1 },
    leagueId: 'premier-league',
    round: 21,
    ticketPrice: { standard: 50, premium: 90, vip: 180 },
    availableTickets: 0
  },
  {
    id: 'match-3',
    homeTeam: teams[4], // Manchester City
    awayTeam: teams[5], // Tottenham
    date: new Date('2024-01-10T20:00:00'),
    venue: 'Etihad Stadium',
    status: 'finished',
    score: { home: 3, away: 2 },
    leagueId: 'premier-league',
    round: 20,
    ticketPrice: { standard: 55, premium: 95, vip: 200 },
    availableTickets: 0
  }
];

// Mock League Table
export const leagueTable: LeagueTable = {
  leagueId: 'premier-league',
  standings: [
    {
      position: 1,
      team: teams[4], // Manchester City
      played: 21,
      won: 16,
      drawn: 3,
      lost: 2,
      goalsFor: 52,
      goalsAgainst: 18,
      goalDifference: 34,
      points: 51,
      form: ['W', 'W', 'D', 'W', 'W']
    },
    {
      position: 2,
      team: teams[1], // Liverpool
      played: 21,
      won: 14,
      drawn: 5,
      lost: 2,
      goalsFor: 48,
      goalsAgainst: 22,
      goalDifference: 26,
      points: 47,
      form: ['W', 'D', 'W', 'W', 'L']
    },
    {
      position: 3,
      team: teams[3], // Arsenal
      played: 21,
      won: 13,
      drawn: 4,
      lost: 4,
      goalsFor: 41,
      goalsAgainst: 24,
      goalDifference: 17,
      points: 43,
      form: ['L', 'W', 'W', 'D', 'W']
    },
    {
      position: 4,
      team: teams[0], // Manchester United
      played: 21,
      won: 12,
      drawn: 3,
      lost: 6,
      goalsFor: 38,
      goalsAgainst: 28,
      goalDifference: 10,
      points: 39,
      form: ['W', 'L', 'D', 'W', 'L']
    },
    {
      position: 5,
      team: teams[5], // Tottenham
      played: 21,
      won: 10,
      drawn: 6,
      lost: 5,
      goalsFor: 35,
      goalsAgainst: 30,
      goalDifference: 5,
      points: 36,
      form: ['D', 'W', 'L', 'D', 'W']
    },
    {
      position: 6,
      team: teams[2], // Chelsea
      played: 21,
      won: 9,
      drawn: 7,
      lost: 5,
      goalsFor: 32,
      goalsAgainst: 26,
      goalDifference: 6,
      points: 34,
      form: ['D', 'L', 'W', 'D', 'D']
    }
  ]
};

// Mock News Articles
export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Manchester United Signs New Star Player in Record Transfer',
    slug: 'manchester-united-record-transfer',
    excerpt: 'The Red Devils complete their biggest signing of the season with a world-class midfielder joining from European champions.',
    content: 'Manchester United has completed the signing of their target midfielder in a deal worth €85 million. The player has signed a five-year contract and will wear the number 7 jersey...',
    author: 'Sarah Johnson',
    publishedAt: new Date('2024-01-12T10:00:00'),
    category: 'transfer',
    featuredImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/415888fc-3beb-48c3-8853-9b8e94909cd2.png',
    tags: ['Manchester United', 'Transfer', 'Midfielder']
  },
  {
    id: 'news-2',
    title: 'Premier League Title Race Heats Up as City Extends Lead',
    slug: 'premier-league-title-race-city-lead',
    excerpt: 'Manchester City\'s latest victory puts them 4 points clear at the top, but Liverpool and Arsenal remain in hot pursuit.',
    content: 'The Premier League title race is reaching fever pitch as Manchester City secured a crucial 3-2 victory against Tottenham at the Etihad Stadium...',
    author: 'Michael Chen',
    publishedAt: new Date('2024-01-11T08:30:00'),
    category: 'match',
    featuredImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/773ab1c0-2df8-4bde-9946-92e0e3065e22.png',
    tags: ['Premier League', 'Manchester City', 'Title Race']
  }
];

// Mock Events
export const events: Event[] = [
  {
    id: 'event-1',
    title: 'Champions League Final Watch Party',
    description: 'Join fellow fans for an unforgettable Champions League Final viewing experience with food, drinks, and prizes.',
    date: new Date('2024-06-01T19:00:00'),
    venue: 'Sports Bar & Grill',
    type: 'fan-event',
    price: 25,
    maxAttendees: 200,
    currentAttendees: 87,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec326295-8b0b-4d8c-b199-9dbd558c1e2d.png',
    registrationRequired: true
  },
  {
    id: 'event-2',
    title: 'Youth Football Tournament',
    description: 'Annual youth tournament featuring teams from across the region. Open to players aged 12-16.',
    date: new Date('2024-03-15T09:00:00'),
    venue: 'Community Sports Complex',
    type: 'tournament',
    price: 15,
    maxAttendees: 500,
    currentAttendees: 324,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9168bc18-6d89-4041-97de-1165a00e72d4.png',
    registrationRequired: true
  }
];

// Helper functions to get data
export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getMatchById = (id: string): Match | undefined => {
  return matches.find(match => match.id === id);
};

export const getUpcomingMatches = (): Match[] => {
  return matches.filter(match => match.status === 'upcoming')
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};

export const getLiveMatches = (): Match[] => {
  return matches.filter(match => match.status === 'live');
};

export const getFinishedMatches = (): Match[] => {
  return matches.filter(match => match.status === 'finished')
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getRecentNews = (limit?: number): NewsArticle[] => {
  const sorted = newsArticles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getUpcomingEvents = (): Event[] => {
  return events.filter(event => event.date > new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};