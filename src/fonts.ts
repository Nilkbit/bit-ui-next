import { Unbounded, Roboto, Roboto_Mono } from "next/font/google";

const fontHeading = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["900", "800", "700"],
  style: "normal",
  variable: "--font-heading"
});

const fontBody = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "500"],
  style: "normal",
  variable: "--font-body"
});

const fontMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "500"],
  style: "normal",
  variable: "--font-mono"
});

export { fontHeading, fontBody, fontMono }