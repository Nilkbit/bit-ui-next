import type { Metadata } from "next";
import { StyledComponentsRegistry } from '@/lib/emotion';
import "@/style/globals.scss";
import { fontHeading, fontBody, fontMono } from "@/fonts";

export const metadata: Metadata = {
  title: "bit-ui",
  description: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}