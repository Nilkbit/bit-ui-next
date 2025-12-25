import type { Metadata } from "next";
import { StyledComponentsRegistry } from '@/lib/emotion';
import "@/style/globals.scss";
import { fontHeading, fontBody, fontMono } from "@/fonts";
import { Flex } from "@/components/ui";
import { Header } from "@/components/elements";
import { nRem, type Size } from "@/types/kit";

export const metadata: Metadata = {
  title: "bit-ui",
  description: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const padding = {
    lg: 240,
    md: 144,
    sm: 64,
    xs: 16
  } as const satisfies Record<Size, number>;

  const getPadding = (pad: number) => {
    return ({padding: `0 calc(${nRem} * ${pad})`}) as React.CSSProperties;
  }

  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}>
        <StyledComponentsRegistry>
          <Header />
          <Flex as="main" direction="column" gap={96}
            lgStyle={getPadding(padding.lg)}
            mdStyle={getPadding(padding.md)}
            smStyle={getPadding(padding.sm)}
            xsStyle={getPadding(padding.xs)}
          >
            {children}
          </Flex>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}