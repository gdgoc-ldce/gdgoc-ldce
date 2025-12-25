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

export interface Event {
  id: string;
  title: string;
  eventType: string;
  description: string;

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
   * Optional: Extra content for Study Jam type events
   * Include this only for events that have houses, winners, syllabus
   */
  studyJamData?: StudyJamData;

  order?: number;
  isVisible?: boolean;
}

export interface EventsData {
  events: Event[];
}
