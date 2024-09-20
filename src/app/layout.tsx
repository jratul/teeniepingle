import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "티니핑글",
  description: "당신의 티니핑을 찾아보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
