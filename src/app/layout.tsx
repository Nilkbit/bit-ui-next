import type { Metadata } from "next";
import { StyledComponentsRegistry } from '@/lib/emotion';

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
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}