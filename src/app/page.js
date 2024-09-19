import React from "react";
import Hero from "../components/Hero/Hero";
import Image from "next/image";
import Trend from "@/components/Trend/Trend";
import Random from "@/components/Random/Random";

const Page = async () => {
  const res = await fetch("https://demonking-7hti.onrender.com/api/hen-home", {
    cache: "no-store",
  });
  const json = await res.json();

  const slides = json.results.data.recent.map((i) => ({
    id: i.id,
    title: i.title,
    views: i.views,
    image: i.poster, // Use the image from the API response
  }));

  const slideo = json.results.data.trending.map((i) => ({
    id: i.id,
    title: i.title,
    views: i.views,
    image: i.poster, // Use the image from the API response
  }));

  const slidel = json.results.data.random.map((i) => ({
    id: i.id,
    title: i.title,
    views: i.views,
    image: i.poster, // Use the image from the API response
  }));

  return (
    <div className="data-container">
      <div className="hero-image">
        <Image
          src="https://static-assets.freeanimehentai.net/images/bg3d-1900.930.min.jpg"
          alt="Hero"
          className="imgol"
          width={1900}
          height={930}
          layout="responsive"
        />
        <div className="text-overlay">Watch Free HD Hentai & Anime Videos</div>
        <div className="texto">
          Enjoy your <span className="unlimi">unlimited</span> hentai & anime
          collection. We are the definitive source for the best curated 720p /
          1080p HD hentai videos, viewable by mobile phone and tablet, for free.
        </div>
      </div>
      <Hero slides={slides} />
      <Trend slides={slideo} />
      <Random slides={slidel} />
    </div>
  );
};

export default Page;
