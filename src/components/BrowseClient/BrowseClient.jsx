// app/browse/BrowseClient.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { FaLeaf, FaRandom } from "react-icons/fa";
import { IoMdSearch, IoMdVideocam } from "react-icons/io";
import "./page.css";
import NavSidebar from "../NavSideBar/NavSideBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

export default function BrowseClient({ data }) {
  const icons = [<BsFire />, <FaLeaf />, <FaRandom />, <IoMdSearch />];
  const links = ["/", "/browse/go", "/random/go", "/search/go"];

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
      <div className="comp-brow">
        <div>
          {/* Category Grid */}
          <div className="imagino">
            {data.category?.map((i, index) => (
              <Link key={i.id} className="image-contai" href={links[index]}>
                <img src={i.poster} alt="Sample Image" />
                <div className="text-overl text-overl-top">{icons[index]}</div>
                <div className="text-overl text-overl-bottom">
                  {i.title.toUpperCase()}
                </div>
                <div className="text-overl text-overl-triam">
                  {i.description}
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Grid */}
          <div className="imagino2">
            <div>
              <div className="image-contai1" href={links[0]}>
                <img src={data.category?.[0]?.poster} alt="Sample Image" />
                <div className="text-overl text-overl-top">{icons[0]}</div>
                <div className="text-overl text-overl-bottom">
                  {data.category?.[0]?.title?.toUpperCase()}
                </div>
                <div className="text-overl text-overl-triam">
                  {data.category?.[0]?.description}
                </div>
              </div>
              <div className="image-contai2" href={links[1]}>
                <img src={data.category?.[1]?.poster} alt="Sample Image" />
                <div className="text-overl text-overl-top">{icons[1]}</div>
                <div className="text-overl text-overl-bottom">
                  {data.category?.[1]?.title?.toUpperCase()}
                </div>
                <div className="text-overl text-overl-triam">
                  {data.category?.[1]?.description}
                </div>
              </div>
            </div>
            <div>
              <div className="image-contai3" href={links[2]}>
                <img src={data.category?.[2]?.poster} alt="Sample Image" />
                <div className="text-overl text-overl-top">{icons[2]}</div>
                <div className="text-overl text-overl-bottom">
                  {data.category?.[2]?.title?.toUpperCase()}
                </div>
                <div className="text-overl text-overl-triam">
                  {data.category?.[2]?.description}
                </div>
              </div>
              <div className="image-contai4" href={links[3]}>
                <img src={data.category?.[3]?.poster} alt="Sample Image" />
                <div className="text-overl text-overl-top">{icons[3]}</div>
                <div className="text-overl text-overl-bottom">
                  {data.category?.[3]?.title?.toUpperCase()}
                </div>
                <div className="text-overl text-overl-triam">
                  {data.category?.[3]?.description}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Genres */}
        <div>
          <div className="heff">CATEGORIES TAGS</div>
          <div className="categis">
            {data.genre?.map((i) =>
              i.poster !== "https://i.imgur.com/jajIHZ7.jpg" ? (
                <Link
                  key={i.id}
                  className="imagi"
                  href={`/tags/genre?item=${i.id.replace("/genre/", "")}`}
                >
                  <img src={i.poster} alt="" />
                  <div className="belowJ"></div>
                  <div className="text-ovel-top">
                    <img src={i.firstPoster} alt="" />
                  </div>
                  <div className="text-ovel-sec">
                    {(i.title || i.titleOp)?.toUpperCase()}
                  </div>
                  <div className="text-ovel-thi">
                    {i.description || i.descriptionTwo}
                  </div>
                  <div className="text-ovel-bott">
                    <IoMdVideocam /> {i.videos || i.videosOpt}
                  </div>
                </Link>
              ) : null
            )}
          </div>

          {/* Mini Cards */}
          <div className="miniCards">
            {data.genre?.map((i) =>
              i.poster === "https://i.imgur.com/jajIHZ7.jpg" &&
              i.videosOpt !== "0" ? (
                <Link
                  key={i.id}
                  className="miniCard"
                  href={`/tags/genre?item=${i.id.replace("/genre/", "")}`}
                >
                  <div className="texy">
                    <div className="text-ovl-top">
                      <img src={i.firstPoster} alt="" />
                    </div>
                    <div className="titop">
                      {(i.title || i.titleOp)?.toUpperCase()}
                    </div>
                  </div>
                  <div className="vdo">
                    <IoMdVideocam /> {i.videos || i.videosOpt}
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>

        {/* Studios */}
        <div>
          <div className="heff">ANIMATION STUDIOS BRANDS</div>
          <div className="fino">
            {data.studios?.map((i) => (
              <Link
                key={i.id}
                className="finalep"
                href={`/tags/brand?item=${i.id.replace("/brand/", "")}`}
              >
                <div className="finaltiti">{i.title.toUpperCase()}</div>
                <div className="finalvdo">{i.videos}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
