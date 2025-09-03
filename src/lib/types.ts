// Core Types for Soccer Web App

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
  stadium: string;
  founded: number;
  country: string;
}

export interface Player {
  id: string;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  number: number;
  age: number;
  nationality: string;
  photo: string;
  stats: {
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    appearances: number;
  };
  teamId: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: Date;
  venue: string;
  status: 'upcoming' | 'live' | 'finished';
  score?: {
    home: number;
    away: number;
  };
  leagueId: string;
  round?: number;
  ticketPrice: {
    standard: number;
    premium: number;
    vip: number;
  };
  availableTickets: number;
}

export interface League {
  id: string;
  name: string;
  country: string;
  logo: string;
  season: string;
  teams: Team[];
}

export interface LeagueTable {
  leagueId: string;
  standings: TeamStanding[];
}

export interface TeamStanding {
  position: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  category: 'transfer' | 'match' | 'interview' | 'general';
  featuredImage: string;
  tags: string[];
  relatedArticles?: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  venue: string;
  type: 'match' | 'tournament' | 'fan-event' | 'training';
  price?: number;
  maxAttendees?: number;
  currentAttendees: number;
  image: string;
  registrationRequired: boolean;
}

export interface TicketPurchase {
  matchId: string;
  seatSection: string;
  seatNumber: string;
  ticketType: 'standard' | 'premium' | 'vip';
  price: number;
  buyerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface StadiumSection {
  id: string;
  name: string;
  type: 'standard' | 'premium' | 'vip';
  price: number;
  availableSeats: number;
  totalSeats: number;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}