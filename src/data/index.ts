import eventsData from "./events.json";
import teamData from "./team.json";
import type { Event, EventsData, TeamMember, TeamCategory } from "./types";

interface TeamData {
  members: TeamMember[];
}

export function getEvents(): Event[] {
  const data = eventsData as EventsData;

  return data.events
    .filter((event) => event.isVisible !== false)
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      if (a.order !== undefined) return -1;
      if (b.order !== undefined) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getEventById(id: string): Event | undefined {
  const data = eventsData as EventsData;
  return data.events.find((event) => event.id === id);
}

export function getAllEvents(): Event[] {
  const data = eventsData as EventsData;
  return data.events;
}

export function getTeamMembers(): TeamMember[] {
  const data = teamData as TeamData;
  return [...data.members].sort((a, b) => a.order - b.order);
}

export function getTeamMembersByCategory(category: TeamCategory): TeamMember[] {
  const data = teamData as TeamData;
  return data.members
    .filter((member) => member.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  const data = teamData as TeamData;
  return data.members.find((member) => member.id === id);
}
