import { Montserrat, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
});

export const metadata = {
  title: "Vin Benjamin Belandres",

  description:
    "Software Engineer | Full Stack Developer | React | Next.js | React Native",

  keywords: [
    "Software Engineer",
    "Next.js",
    "React",
    "Portfolio",
    "Java",
    "Supabase",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <body
        className={`${montserrat.variable} ${libreBaskerville.variable} font-sans bg-white text-zinc-900 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
