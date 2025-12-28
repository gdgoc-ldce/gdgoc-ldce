import { Badge, InfoBox, List } from "./primitives";
import type { HouseMentor, Winner, GoogleColor } from "./types";

interface StudyJamContentProps {
  houseMentors: HouseMentor[];
  winners: Winner[];
  syllabus: string[];
}

const HOUSE_COLORS: GoogleColor[] = ["red", "blue", "green", "yellow"];

export default function StudyJamContent({
  houseMentors,
  winners,
  syllabus,
}: StudyJamContentProps) {
  return (
    <div className="space-y-4">
      <InfoBox title="🏠 House Mentors" color="green">
        <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
          {houseMentors.map((hm, i) => (
            <div key={i} className="flex items-center gap-1">
              <Badge
                color={HOUSE_COLORS[i % HOUSE_COLORS.length]!}
                className="text-[10px]"
              >
                {hm.house}
              </Badge>
              <span className="truncate text-xs text-gray-700">
                {hm.mentor}
              </span>
            </div>
          ))}
        </div>
      </InfoBox>

      <InfoBox title="🏆 Speedathon Winners" color="yellow">
        <div className="flex flex-wrap gap-3">
          {winners.map((w, i) => (
            <div key={i} className="flex items-center gap-1 text-sm">
              <span className="text-lg">{w.emoji}</span>
              <span className="font-bold text-gray-800">{w.position}</span>
              <span className="text-gray-600">- {w.name}</span>
            </div>
          ))}
        </div>
      </InfoBox>

      <div className="rounded-lg border-2 border-dashed border-gray-400 bg-blue-50/50 p-3">
        <h3 className="font-title mb-2 text-lg tracking-wide text-gray-800">
          📚 Syllabus Covered ({syllabus.length} Badges)
        </h3>
        <div className="max-h-40 overflow-y-auto" data-lenis-prevent>
          <List items={syllabus} color="blue" numbered />
        </div>
      </div>
    </div>
  );
}
