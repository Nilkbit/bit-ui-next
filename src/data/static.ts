import type { Icons, Url } from "@/types/kit";

export const pages: {
  name: string, 
  href: Url
}[] = [
  {
    name: "Links",
    href: "/links"
  }
];

export const links: {
  name: string,
  href: Url,
  icon: Icons,
  desc: string
}[] = [
  {
    name: "Telegram",
    href: "https://t.me/nilkbit",
    icon: "logo_telegram",
    desc: "Updates and live chat"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Nilkbit",
    icon: "logo_youtube",
    desc: "Videos, guides, and exclusive content"
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/nilkbit",
    icon: "logo_twitch",
    desc: "Live streams and audience interaction"
  },
  {
    name: "GitHub",
    href: "https://github.com/Nilkbit",
    icon: "logo_github",
    desc: "Code, projects, and open repositories"
  },
  {
    name: "Donate",
    href: "https://donatepay.ru/don/nilkbit",
    icon: "money-bag",
    desc: "Support me"
  }
];

export const skills: {
  name: string,
  icon: Icons,
  desc: string,
  href: Url
}[] = [
 {
  name: "Figma",
  icon: "logo_figma",
  desc: "Collaborative cloud-based UI/UX design and prototyping tool.",
  href: "https://www.figma.com/"
 },
 {
  name: "VSCodium",
  icon: "logo_vscodium",
  desc: "Telemetry-free, open-source build of VS Code.",
  href: "https://vscodium.com/"
 },
 {
  name: "SASS",
  icon: "logo_sass",
  desc: "CSS preprocessor with variables, nesting, and mixins.",
  href: "https://sass-lang.com/"
 },
 {
  name: "React",
  icon: "logo_react",
  desc: "UI library for component-based JavaScript apps using virtual DOM.",
  href: "https://react.dev/"
 },
 {
  name: "Vue.js",
  icon: "logo_vuedotjs",
  desc: "Progressive JavaScript framework for approachable, performant UIs.",
  href: "https://vuejs.org/"
 },
 {
  name: "PostgreSQL",
  icon: "logo_postgresql",
  desc: "Open-source, extensible object-relational database system.",
  href: "https://www.postgresql.org/"
 },
 {
  name: "Next.js",
  icon: "logo_nextdotjs",
  desc: "React framework for server-side rendering, static sites, and API routes.",
  href: "https://nextjs.org/"
 },
 {
  name: "Nuxt",
  icon: "logo_nuxt",
  desc: "SSR/static site framework for Vue with auto-routing and optimizations.",
  href: "https://nuxt.com/"
 },
 {
  name: "Supabase",
  icon: "logo_supabase",
  desc: "Open-source Firebase alternative powered by PostgreSQL (auth, realtime, storage).",
  href: "https://supabase.com/"
 }
];