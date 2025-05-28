"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import NavSidebar from "@/components/NavSideBar/NavSideBar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import "./watch.css";

export default function WatchPageClient({ data, datal }) {
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
      <Footer />
    </>
  );
}
