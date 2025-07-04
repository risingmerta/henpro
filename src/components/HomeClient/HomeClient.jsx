// app/HomeClient.jsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Trend from "@/components/Trend/Trend";
import Random from "@/components/Random/Random";
import Navbar from "../Navbar/Navbar";
import NavSidebar from "../NavSideBar/NavSideBar";
import Footer from "../footer/Footer";

export default function HomeClient({ slides, slideo, slidel }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar
        isScrolled={isScrolled}
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <NavSidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <div className="data-container">
        {/* Hero image with overlay */}
        <div className="hero-image">
          <Image
            src="https://static-assets.freeanimehentai.net/images/bg3d-1900.930.min.jpg"
            alt="Hero"
            className="imgol"
            width={1900}
            height={930}
            layout="responsive"
          />
          <div className="text-overlay">
            Watch Free HD Hentai & Anime Videos
          </div>
          <div className="texto">
            Enjoy your <span className="unlimi">unlimited</span> hentai & anime
            collection. We are the definitive source for the best curated 720p /
            1080p HD hentai videos, viewable by mobile phone and tablet, for
            free.
          </div>
        </div>

        {/* Sections */}
        <Hero slides={slides} />
        <Trend slides={slideo} />
        <Random slides={slidel} />
      </div>
      <Footer />
    </>
  );
}
