"use client";
import Script from "next/script";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [adVisible, setAdVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const adContainer = document.getElementById(
        "container-0edc04a5374d9021ce8e6b9f5bb01d53"
      );
      if (adContainer && adContainer.childNodes.length > 0) {
        setAdVisible(true);
      } else {
        setAdVisible(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        margin: 0,
        padding: 0,
        height: "90px",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Script
        src="//abackdamstubborn.com/0edc04a5374d9021ce8e6b9f5bb01d53/invoke.js"
        strategy="afterInteractive"
        data-cfasync="false"
        async
      />
      <div
        id="container-0edc04a5374d9021ce8e6b9f5bb01d53"
        style={{
          height: "100%",
          width: "100%",
          display: adVisible ? "block" : "none",
        }}
      />
      {!adVisible && (
        <div
          style={{
            height: "90px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fdbd73",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Click to support Henpro 💖
        </div>
      )}
    </div>
  );
};

export default Page;
