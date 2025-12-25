export const GOOGLE_COLORS = {
  red: "#DB4437",
  green: "#0F9D58",
  blue: "#4285F4",
  yellow: "#F4B400",
} as const;

export type GoogleColor = keyof typeof GOOGLE_COLORS;

export type TeamCategory =
  | "core"
  | "tech"
  | "management"
  | "design"
  | "content";

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
  category: TeamCategory;
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
  icon: string;
  description: string;
  color: GoogleColor;
}

export const TEAM_CATEGORIES: TeamCategoryInfo[] = [
  {
    id: "core",
    label: "Core Team",
    icon: "⭐",
    description: "The leaders driving our community forward",
    color: "blue",
  },
  {
    id: "tech",
    label: "Tech Team",
    icon: "💻",
    description: "Building amazing things with code",
    color: "green",
  },
  {
    id: "management",
    label: "Management",
    icon: "📋",
    description: "Orchestrating events and operations",
    color: "red",
  },
  {
    id: "design",
    label: "Design Team",
    icon: "🎨",
    description: "Crafting beautiful visual experiences",
    color: "yellow",
  },
  {
    id: "content",
    label: "Content Team",
    icon: "✍️",
    description: "Telling stories that inspire",
    color: "blue",
  },
];
