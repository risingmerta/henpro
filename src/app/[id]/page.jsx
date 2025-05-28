import React from "react";
import "./page.css";
import Link from "next/link";
import { connectDB } from "@/lib/mongoClient";
import { MongoClient } from "mongodb";

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

  console.log(formattedTitle);
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
  console.log("params.id:", params.id);
  console.log("Querying _id:", `/${params.id}/`);

  const uri =
    "mongodb://animoon:Imperial_merta2030@145.223.82.113:27017/?authSource=admin";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("mydatabase");
    const collection = db.collection("hentai");

    // const id = "/fuuki-iin-to-fuuzoku-katsudou-episode-2/";

    const doc = await collection.findOne({ _id: id });
    data = doc;
    imageURL = doc.poster;

    if (doc) {
      console.log("Document found:", doc.title);
    } else {
      console.log("Document not found.");
    }
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
      <div className="compli">
        <div className="watc">
          <div>
            <div>
              <iframe
                src={data.url}
                frameBorder="0"
                className="ifro"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div>
              <div className="slab1">
                <div className="titleD">{data.title}</div>
                <div className="viewD">{data.views}</div>
              </div>
              <div className="slab2">
                <div className="fourCon">
                  <div className="postCon">
                    <img src={data.poster} alt="" className="posterD" />
                  </div>
                  <div className="fourA">
                    <div className="flex four1">
                      <div className="four11">
                        <div>
                          <div className="teamA">Brand</div>
                          <div className="brando">{data.info?.brand}</div>
                        </div>
                      </div>
                      <div className="four12">
                        {data.cencored ? (
                          <div className="cencored">{data.cencored}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="four2">
                      <div className="teamA">Brand Uploads</div>
                      <div className="restInfo">{data.info?.brandUploads}</div>
                    </div>
                    <div className="flex four3">
                      <div className="four31">
                        <div>
                          <div className="teamA">Release Date</div>
                          <div className="restInfo">
                            {data.info?.releasedDate}
                          </div>
                        </div>
                      </div>
                      <div className="four32">
                        <div>
                          <div className="teamA">Upload Date</div>
                          <div className="restInfo">
                            {data.info?.uploadDate}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="four4">
                      <div className="teamA">Alternate Title</div>
                      <div className="restInfo">
                        {data.info?.alternateTitle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="descSlab">
                  <div className="tagG">
                    {data.moreInfo.tags.map((i) => (
                      <Link
                        className="tags"
                        href={`/tags/genre?item=${i
                          .replace(" ", "-")
                          .toLowerCase()}`}
                      >
                        {i}
                      </Link>
                    ))}
                  </div>
                  <div className="desc1">{data.moreInfo.descripOne}</div>
                  <div className="desc2">
                    {data.moreInfo.descripOne !== data.moreInfo.descripTwo
                      ? data.moreInfo.descripTwo
                      : ""}
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <div className="kalu">
              {datal.map((i) => (
                <Link className="alliu" href={i.id}>
                  <div className="fixed-size-container">
                    <img
                      src={i.banner}
                      alt={i.title}
                      className="fixed-size-img"
                    />
                  </div>
                  <div className="iopu">
                    <div className="titleo">{i.title}</div>
                    <div className="lopi">{i.views}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
