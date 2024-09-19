import React from "react";
import "./page.css";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default async function page({ params, searchParams }) {
  let data = [];
  try {
    const res = await fetch(
      `https://demonking-7hti.onrender.com/api/hen-cat?brand=${params.id}&item=${
        searchParams.item
      }&page=${searchParams.page ? searchParams.page : "1"}`,
      {
        cache: "no-store",
      }
    );
    data = await res.json();
  } catch (error) {
    console.error("Error fetching document:", error);
  }
  let pagin = [];
  if (parseInt(searchParams.page) === 1) {
    pagin = [1, 2, 3];
  }
  if (!searchParams.page) {
    pagin = [1, 2, 3];
  }
  if (parseInt(searchParams.page) > 1) {
    pagin = [
      parseInt(searchParams.page) - 1,
      parseInt(searchParams.page),
      parseInt(searchParams.page) + 1,
    ];
  }
  return (
    <>
      <div className="page-container">
        <div className="pagination">
          <div className="pagination-items">
            {pagin.map((i) => (
              <Link
                className={`pagination-item ${
                  searchParams.page
                    ? parseInt(searchParams.page) === i
                      ? "aligo"
                      : "pgino"
                    : i === 1
                    ? "aligo"
                    : "pgino"
                }`}
                key={i}
                href={`/tags/${params.id}?item=${searchParams.item.replace(
                  "/",
                  ""
                )}&page=${i}`}
              >
                {i}
              </Link>
            ))}
          </div>
          <Link
            className="pagination-next"
            href={`/tags/${params.id}?item=${searchParams.item.replace(
              "/",
              ""
            )}&page=${searchParams.page ? parseInt(searchParams.page) + 1 : 2}`}
          >
            <FaAngleRight />
          </Link>
        </div>
        <div className="animol">
          {data.results.data.map((i) => (
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
        <div className="pagination">
          <div className="pagination-items">
            {pagin.map((i) => (
              <Link
                className={`pagination-item ${
                  searchParams.page
                    ? parseInt(searchParams.page) === i
                      ? "aligo"
                      : "pgino"
                    : i === 1
                    ? "aligo"
                    : "pgino"
                }`}
                key={i}
                href={`/tags/${params.id}?item=${searchParams.item.replace(
                  "/",
                  ""
                )}&page=${i}`}
              >
                {i}
              </Link>
            ))}
          </div>
          <Link
            className="pagination-next"
            href={`/tags/${params.id}?item=${searchParams.item.replace(
              "/",
              ""
            )}&page=${searchParams.page ? parseInt(searchParams.page) + 1 : 2}`}
          >
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </>
  );
}
