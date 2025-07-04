import React from "react";
import "./page.css";
import Link from "next/link";
import { connectDB } from "@/lib/mongoClient";
import { MongoClient } from "mongodb";
import WatchPageClient from "@/components/WatchPageClient/WatchPageClient";

export async function generateMetadata({ params }) {
  // let data = [];
  // const ids = params.id;
  // const id = "/" + ids + "/";
  // const db = await connectDB();
  // try {
  //   const animeInfoCol = db.collection("hentai");
  //   const doc = await animeInfoCol.findOne({
  //     _id: "/fuuki-iin-to-fuuzoku-katsudou-episode-2/",
  //   });
  //   if (doc) {
  //     data = doc;
  //   } else {
  //     data = "no didnt";
  //   }
  // } catch (error) {
  //   console.error("Error fetching document:", error);
  // }

  // console.log("data", data);

  function capitalizeWords(str) {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const paramsId = params.id;
  const formattedTitle = capitalizeWords(paramsId);

  // Output: Fuuki Iin To Fuuzoku Katsudou Episode 2

  return {
    title: `Watch ${formattedTitle} Hentai Video Streams Online in 720p , 1080p HD - henpro`,
    description: `Enjoy your unlimited hentai & anime
          collection. We are the definitive source for the best curated 720p /
          1080p HD hentai videos, viewable by mobile phone and tablet, for free.`,
  };
}

export default async function page({ params }) {
  let imageURL = "";
  let data = [];
  let datal = [];
  const ids = params.id;
  const id = "/" + ids + "/";
  // const db = await connectDB();

  const uri =
    "mongodb://root:Imperial_king2004@145.223.118.168:27017/?authSource=admin";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("mydatabase");
    const collection = db.collection("hentai");

    // const id = "/fuuki-iin-to-fuuzoku-katsudou-episode-2/";

    const doc = await collection.findOne({ _id: id });
    data = doc;
    imageURL = doc.poster;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

  // try {
  //   const animeInfoCol = db.collection("hentai");
  //   const doc = await animeInfoCol.findOne({
  //     _id: "/fuuki-iin-to-fuuzoku-katsudou-episode-2/",
  //   });
  //   data = doc;
  //   if (doc.poster) {
  //     imageURL = doc.poster;
  //   }
  // } catch (error) {
  //   console.error("Error fetching document:", error);
  // }
  // Fetch data from API
  const apiResponse = await fetch(`https://hent.shoko.fun/api/hen-random`, {
    cache: "no-store",
  });
  const newResponse = await apiResponse.json();
  const apiData = newResponse.results.data;
  datal = apiData;
  return (
    <>
      <WatchPageClient data={data} datal={datal} />
    </>
  );
}
