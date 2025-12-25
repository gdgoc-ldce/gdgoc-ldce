import type { GoogleColor } from "@/components/comic";

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
  socialLinks?: SocialLinks;
  color: GoogleColor;
  order: number;
}

export interface TeamData {
  members: TeamMember[];
}
