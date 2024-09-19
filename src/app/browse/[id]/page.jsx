import React from "react";
import Image from "next/image";
import { BsFire } from "react-icons/bs";
import "./page.css";
import { FaLeaf, FaRandom } from "react-icons/fa";
import { IoMdSearch, IoMdVideocam } from "react-icons/io";
import Link from "next/link";

export const metadata = {
  title:
    "Browse Free Hentai Video Streams Online in 720p , 1080p HD - henpro",
  description: `Enjoy your unlimited hentai & anime
          collection. We are the definitive source for the best curated 720p /
          1080p HD hentai videos, viewable by mobile phone and tablet, for free.`,
};

export default async function page() {
  let imageURL = "";
  let data = [];
  try {
    const res = await fetch("https://demonking-7hti.onrender.com/api/hen-browse", {
      cache: "no-store",
    });
    data = await res.json();
  } catch (error) {
    console.error("Error fetching document:", error);
  }
  const icons = [<BsFire />, <FaLeaf />, <FaRandom />, <IoMdSearch />];
  const links = ['/','/browse/go','/random/go','/search/go']

  return (
    <>
      <div className="comp-brow">
        <div>
          <div className="imagino">
            {data.results.data.category.map((i, index) => (
              <Link class={`image-contai`} href={links[index]}>
                <img src={i.poster} alt="Sample Image" />
                <div class="text-overl text-overl-top">{icons[index]}</div>
                <div class="text-overl text-overl-bottom">
                  {i.title.toUpperCase()}
                </div>
                <div class="text-overl text-overl-triam">{i.description}</div>
              </Link>
            ))}
          </div>
          <div className="imagino2">
            <div>
              <div class={`image-contai1`} href={links[0]}>
                <img
                  src={data.results.data.category[0].poster}
                  alt="Sample Image"
                />
                <div class="text-overl text-overl-top">{icons[0]}</div>
                <div class="text-overl text-overl-bottom">
                  {data.results.data.category[0].title.toUpperCase()}
                </div>
                <div class="text-overl text-overl-triam">
                  {data.results.data.category[0].description}
                </div>
              </div>
              <div class={`image-contai2`} href={links[1]}>
                <img
                  src={data.results.data.category[1].poster}
                  alt="Sample Image"
                />
                <div class="text-overl text-overl-top">{icons[1]}</div>
                <div class="text-overl text-overl-bottom">
                  {data.results.data.category[1].title.toUpperCase()}
                </div>
                <div class="text-overl text-overl-triam">
                  {data.results.data.category[1].description}
                </div>
              </div>
            </div>
            <div>
              <div class={`image-contai3`} href={links[2]}>
                <img
                  src={data.results.data.category[2].poster}
                  alt="Sample Image"
                />
                <div class="text-overl text-overl-top">{icons[2]}</div>
                <div class="text-overl text-overl-bottom">
                  {data.results.data.category[2].title.toUpperCase()}
                </div>
                <div class="text-overl text-overl-triam">
                  {data.results.data.category[2].description}
                </div>
              </div>
              <div class={`image-contai4`} href={links[3]}>
                <img
                  src={data.results.data.category[3].poster}
                  alt="Sample Image"
                />
                <div class="text-overl text-overl-top">{icons[3]}</div>
                <div class="text-overl text-overl-bottom">
                  {data.results.data.category[3].title.toUpperCase()}
                </div>
                <div class="text-overl text-overl-triam">
                  {data.results.data.category[3].description}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="heff">CATEGORIES TAGS</div>
          <div className="categis">
            {data.results.data.genre.map(
              (i) =>
                i.poster !== "https://i.imgur.com/jajIHZ7.jpg" ? (
                  <Link className="imagi" href={`/tags/genre?item=${i.id.replace('/genre/','')}`}>
                    <img src={i.poster} alt="" />
                    <div className="belowJ"></div>
                    <div className="text-ovel-top">
                      <img src={i.firstPoster} alt="" />
                    </div>
                    <div className="text-ovel-sec">
                      {i.title
                        ? i.title.toUpperCase()
                        : i.titleOp.toUpperCase()}
                    </div>
                    <div className="text-ovel-thi">
                      {i.description ? i.description : i.descriptionTwo}
                    </div>
                    <div className="text-ovel-bott">
                      <div>
                        <IoMdVideocam />
                      </div>
                      {i.videos ? i.videos : i.videosOpt}
                    </div>
                  </Link>
                ) : null // Return null instead of an empty string
            )}
          </div>
          <div className="miniCards">
            {data.results.data.genre.map((i) =>
              i.poster === "https://i.imgur.com/jajIHZ7.jpg" &&
              i.videosOpt !== "0" ? (
                <Link className="miniCard" href={`/tags/genre?item=${i.id.replace('/genre/','')}`}>
                  <div className="texy">
                    <div className="text-ovl-top">
                      <img src={i.firstPoster} alt="" />
                    </div>
                    <div className="titop">
                      {i.title
                        ? i.title.toUpperCase()
                        : i.titleOp.toUpperCase()}
                    </div>
                  </div>
                  <div className="vdo">
                    <div>
                      <IoMdVideocam />
                    </div>{" "}
                    {i.videos ? i.videos : i.videosOpt}
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
        <div>
          <div className="heff">ANIMATION STUDIOS BRANDS</div>
          <div className="fino">
            {data.results.data.studios.map((i) => (
              <Link className="finalep" href={`/tags/brand?item=${i.id.replace('/brand/','')}`}>
                <div className="finaltiti">{i.title.toUpperCase()}</div>
                <div className="finalvdo">{i.videos}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
