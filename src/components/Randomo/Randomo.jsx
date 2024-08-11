"use client"
import React from "react";
import "./randomo.css";
import Link from "next/link";

const Randomo = (props) => {
  const oop = () => {
    window.location.reload();
  };
  return (
    <div className="pagito">
      <div className="randio">
        {" "}
        <div className="inrandi" onClick={() => oop()}>
          Randomize
        </div>
      </div>
      <div className="animol">
        {props.data.results.data.map((i) => (
          <Link className="anime-card" key={i.id} href={i.id}>
            <div className="poster-wrapper">
              <img src={i.poster} alt={i.title} className="poster" />
              <div className="gradient-overlay"></div>
            </div>
            <div className="below-poster">
              <h3 className="title">{i.title}</h3>
              <p className="views">{i.views} views</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="randio">
        <div className="inrandi" onClick={() => oop()}>
          Randomize
        </div>
      </div>
    </div>
  );
};

export default Randomo;
