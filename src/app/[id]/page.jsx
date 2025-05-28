import { MongoClient } from "mongodb";
import { Suspense } from "react";
import WatchPageClient from "@/components/WatchPageClient/WatchPageClient";

export async function generateMetadata({ params }) {
  const formattedTitle = params.id
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Watch ${formattedTitle} Hentai Video Streams Online in 720p , 1080p HD - henpro`,
    description: `Enjoy your unlimited hentai & anime collection in HD, mobile-optimized for free.`,
  };
}

export default async function Page({ params }) {
  const id = "/" + params.id + "/";

  const uri = "mongodb://animoon:Imperial_merta2030@145.223.82.113:27017/?authSource=admin";
  const client = new MongoClient(uri);
  let data = null;
  let datal = [];

  try {
    await client.connect();
    const db = client.db("mydatabase");
    const doc = await db.collection("hentai").findOne({ _id: id });
    data = doc;
  } finally {
    await client.close();
  }

  const apiRes = await fetch("https://hent.shoko.fun/api/hen-random", {
    cache: "no-store",
  });
  const apiJson = await apiRes.json();
  datal = apiJson.results.data;

  return (
    <Suspense>
      <WatchPageClient data={data} datal={datal} />
    </Suspense>
  );
}
