export const GOOGLE_COLORS = {
  red: "#DB4437",
  green: "#0F9D58",
  blue: "#4285F4",
  yellow: "#F4B400",
} as const;

export type GoogleColor = keyof typeof GOOGLE_COLORS;

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
