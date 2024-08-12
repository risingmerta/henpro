import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const DynamicNavic = dynamic(() => import("@/app/Nav/page"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Watch Free Hentai Video Streams Online in 720p , 1080p HD - hanime.tv",
  description: `Enjoy your unlimited hentai & anime
          collection. We are the definitive source for the best curated 720p /
          1080p HD hentai videos, viewable by mobile phone and tablet, for free.`,
  verification: {
    google: "x0aiWAODNGU-1UA2FXyORfyme9uWJir7mIMu8AMmLm4",
  },
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
