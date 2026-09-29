"use client";

import { useState } from "react";
import { getEvents } from "@/data";
import type { Event } from "@/data/types";
import {
  ComicTitle,
  EventTimeline,
  TimelineCard,
  EventModal,
  StudyJamContent,
  type TimelinePageData,
  type TimelineCardData,
  type EventModalData,
} from "@/components/comic";

function toCardData(event: Event): TimelineCardData {
  return {
    id: event.id,
    title: event.title,
    eventType: event.eventType,
    description: event.description,
    date: event.date,
    color: event.color,
    highlightsCount: event.highlights?.length,
  };
}

function toModalData(event: Event): EventModalData {
  return {
    id: event.id,
    title: event.title,
    eventType: event.eventType,
    description: event.description,
    details: event.details,
    highlights: event.highlights,
    color: event.color,
    images: event.images,
    hackathonData: event.hackathonData,
    linkedinUrl: event.linkedinUrl,
    extraContent: event.studyJamData ? (
      <StudyJamContent
        houseMentors={event.studyJamData.houseMentors}
        winners={event.studyJamData.winners}
        syllabus={event.studyJamData.syllabus}
      />
    ) : undefined,
  };
}

export default function EventsPage() {
  const events = getEvents();
  const [selectedEvent, setSelectedEvent] = useState<EventModalData | null>(
    null,
  );

  const timelinePages: TimelinePageData[] = events.map((event, index) => ({
    id: event.id,
    content: (
      <TimelineCard
        event={toCardData(event)}
        index={index}
        onClick={() => setSelectedEvent(toModalData(event))}
      />
    ),
  }));

  if (events.length === 0) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <ComicTitle bg="blue">Past Events</ComicTitle>
        <div className="mt-8 text-center">
          <span className="text-6xl">📅</span>
          <h2 className="font-title mt-4 text-2xl font-bold text-gray-900">
            No events yet
          </h2>
          <p className="mt-2 text-gray-600">
            Check back soon for exciting events!
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="flex flex-col">
        <header className="mx-auto flex max-w-7xl flex-col items-center px-4 py-12">
          <ComicTitle bg="blue">Events</ComicTitle>
          <p className="mt-4 max-w-2xl text-center text-gray-600">
            Scroll through our awesome past events!
          </p>
        </header>

        <EventTimeline pages={timelinePages} />
      </section>

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}
