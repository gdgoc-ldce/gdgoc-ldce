import type { MetadataRoute } from "next";

import { getEvents } from "@/data";
import { absoluteUrl } from "@/lib/site-url";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  lastModified?: Date;
};

function getLatestEventDate(): Date | undefined {
  const events = getEvents();

  return events.reduce<Date | undefined>((latest, event) => {
    const eventDate = new Date(event.date);

    if (Number.isNaN(eventDate.getTime())) {
      return latest;
    }

    if (!latest || eventDate > latest) {
      return eventDate;
    }

    return latest;
  }, undefined);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestEventDate = getLatestEventDate();
  const now = new Date();

  const routes: RouteConfig[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: now },
    {
      path: "/events",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: latestEventDate ?? now,
    },
    {
      path: "/team",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: now,
    },
    {
      path: "/contact",
      priority: 0.7,
      changeFrequency: "yearly",
      lastModified: now,
    },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    priority: route.priority,
    changeFrequency: route.changeFrequency,
    lastModified: route.lastModified ?? now,
  }));
}
