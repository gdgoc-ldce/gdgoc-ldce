export const GOOGLE_COLORS = {
  red: "#DB4437",
  green: "#0F9D58",
  blue: "#4285F4",
  yellow: "#F4B400",
} as const;

export type GoogleColor = keyof typeof GOOGLE_COLORS;

export type TeamCategory =
  | "tech"
  | "management"
  | "creative"
  | "events"
  | "social-media";

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  website?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamCategory | "campus-lead";
  image?: string;
  bio?: string;
  facts?: string[];
  socialLinks?: SocialLinks;
  color: GoogleColor;
  order: number;
  isLead?: boolean;
}

export interface TeamCategoryInfo {
  id: TeamCategory;
  label: string;
  description: string;
  color: GoogleColor;
}

export const TEAM_CATEGORIES: TeamCategoryInfo[] = [
  {
    id: "tech",
    label: "Tech Team",
    description: "Building amazing things with code",
    color: "blue",
  },
  {
    id: "creative",
    label: "Creative Team",
    description: "Crafting beautiful visual experiences",
    color: "red",
  },
  {
    id: "events",
    label: "Events & Engagement",
    description: "Creating memorable experiences",
    color: "green",
  },
  {
    id: "management",
    label: "Management Team",
    description: "Orchestrating events and operations",
    color: "yellow",
  },
  {
    id: "social-media",
    label: "Social Media & Marketing",
    description: "Spreading the word and building community",
    color: "blue",
  },
];
