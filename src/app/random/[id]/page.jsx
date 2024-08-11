import React from "react";
import "./page.css";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Randomo from "@/components/Randomo/Randomo";

export default async function page() {
  let data = [];
  try {
    const res = await fetch(`https://vimal-two.vercel.app/api/hen-random`, {
      cache: "no-store",
    });
    data = await res.json();
  } catch (error) {
    console.error("Error fetching document:", error);
  }
  return (
    <Randomo data={data}/>
  );
}
