import type { Icons } from "@/types/kit";

export const pages: {
  name: string, 
  href: `/${string}`
}[] = [
  {
    name: "Links",
    href: "/links"
  }
];

export const links: {
  name: string,
  href: `https://${string}`,
  icon: Icons,
  desc: string
}[] = [
  {
    name: "Telegram",
    href: "https://t.me/nilkbit",
    icon: "logo_telegram",
    desc: "News, Q&A, chat, submission and other"
  }
];

export const skills: {
  name: string,
  icon: Icons,
  desc: string,
  href: `https://${string}`
}[] = [
 {
  name: "Figma",
  icon: "logo_figma",
  desc: "Collaborative cloud-based UI/UX design and prototyping tool.",
  href: "https://www.figma.com/"
 }
];