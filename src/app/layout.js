import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const DynamicNavic = dynamic(() => import("@/app/Nav/page"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watch Free Hentai Video Streams Online in 720p & 1080p HD - Hanime.tv",
  description: "Enjoy unlimited hentai & anime with our curated collection in 720p and 1080p HD. Watch on your mobile phone or tablet for free.",
  robots: "index, follow", // Directs search engines to index and follow the links
  viewport: "width=device-width, initial-scale=1", // Ensures mobile responsiveness
  keywords: "hentai, anime, free video streams, 720p, 1080p HD", // Keywords related to the content
  author: "Hanime.tv", // Author of the content
  'google-site-verification': "OGW3aXxhc0eEiBr1-yVqwhCIDKZOvD302bVDqOUXjHU", // Verification for Google Search Console
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicNavic>{children}</DynamicNavic>
      </body>
    </html>
  );
}
