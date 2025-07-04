// app/page.jsx
import React from "react";
import HomeClient from "@/components/HomeClient/HomeClient";

export const metadata = {
  title: "Watch Free HD Hentai & Anime Videos - henpro",
  description: `Enjoy your unlimited hentai & anime collection. We are the definitive source for the best curated 720p / 1080p HD hentai videos, viewable by mobile phone and tablet, for free.`,
};

export default async function Page() {
  let json = { results: { data: { recent: [], trending: [], random: [] } } };

  try {
    const res = await fetch("https://hent.shoko.fun/api/hen-home", {
      cache: "no-store",
    });
    json = await res.json();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  const slides = json.results.data.recent.map((i) => ({
    id: i.id,
    title: i.title,
    views: i.views,
    image: i.poster,
  }));

  const slideo = json.results.data.trending.map((i) => ({
    id: i.id,
    title: i.title,
    views: i.views,
    image: i.poster,
  }));

  const slidel = json.results.data.random.map((i) => ({
    id: i.id,
    title: i.title,
    views: i.views,
    image: i.poster,
  }));

  return <HomeClient slides={slides} slideo={slideo} slidel={slidel} />;
}
