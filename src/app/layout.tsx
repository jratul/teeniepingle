import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "티니핑글",
  description: "당신의 티니핑을 찾아보세요",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="font-pretendard">{children}</body>
    </html>
  );
}
