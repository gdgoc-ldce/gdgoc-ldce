export type EventColor = "blue" | "red" | "green" | "yellow";

export interface EventDetail {
  label: string;
  value: string;
}

export interface EventHighlight {
  text: string;
}

export interface HouseMentor {
  house: string;
  mentor: string;
}

export interface Winner {
  position: string;
  name: string;
  emoji: string;
}

export interface StudyJamData {
  houseMentors: HouseMentor[];
  winners: Winner[];
  syllabus: string[];
}

export interface MentoringSession {
  title: string;
  speaker: string;
  description: string;
}

export interface WinningTeam {
  rank: string;
  teamName: string;
  lead: string;
  members: string[];
}

export interface HackathonData {
  preMentoringSessions: MentoringSession[];
  evaluationCriteria: string[];
  winningTeams: WinningTeam[];
}

export interface EventImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Event {
  id: string;
  title: string;
  eventType: string;
  description: string;
  linkedinUrl?: string;
  /**
   * ISO date string for the event
   * For multi-day events, use the start date
   * @example "2025-09-11"
   * @example "2025-10-20"
   */
  date: string;

  /**
   * Array of detail items to show
   * Common details: Date, Venue, Mode, Attendance, Duration
   */
  details: EventDetail[];

  /**
   * Key highlights/achievements from the event
   */
  highlights: EventHighlight[];

  /**
   * Color theme for the event card
   * Choose from Google brand colors: blue, red, green, yellow
   */
  color: EventColor;

  /**
   * Optional: Gallery images
   */
  images?: EventImage[];

  /**
   * Optional: Extra content for Study Jam type events
   */
  studyJamData?: StudyJamData;

  /**
   * Optional: Extra content for Hackathon type events
   */
  hackathonData?: HackathonData;

  order?: number;
  isVisible?: boolean;
}

export interface EventsData {
  events: Event[];
}
