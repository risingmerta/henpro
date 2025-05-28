import React from "react";
import "./link.css";

const links = [
  { title: "Anime Title One", url: "https://hanime.link/anime1" },
  { title: "Anime Title Two", url: "https://hanime.link/anime2" },
  { title: "Anime Title Three", url: "https://hanime.link/anime3" },
  { title: "Anime Title Four", url: "https://hanime.link/anime4" },
  { title: "Anime Title Five", url: "https://hanime.link/anime5" },
  { title: "Anime Title Six", url: "https://hanime.link/anime6" },
  { title: "Anime Title Seven", url: "https://hanime.link/anime7" },
  { title: "Anime Title Eight", url: "https://hanime.link/anime8" },
  { title: "Anime Title Nine", url: "https://hanime.link/anime9" },
  { title: "Anime Title Ten", url: "https://hanime.link/anime10" },
];

const LinkPage = () => {
  return (
    <div
      className="container"
      role="main"
      aria-label="Link page with banner ad"
    >
      <div
        className="banner-ad"
        // style={{
        //   width: "100%",
        //   display: "flex",
        //   justifyContent: "center",
        //   marginTop: "70px",
        // }}
        role="banner"
        tabIndex={0}
        aria-label="Advertisement banner"
      >
        <iframe
          src="/ad"
          // style={{
          //   width: "fit-content",
          //   height: "100px",
          //   border: "none",
          //   overflow: "hidden",
          // }}
          scrolling="no"
        ></iframe>
      </div>

      <h1>Hanime Links</h1>

      <div className="scroll-area">
        <ul className="link-list">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${link.title}`}
              >
                {index + 1}. {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-note">
        Powered by YourBrandName • <small>© 2025</small>
      </div>
    </div>
  );
};

export default LinkPage;
