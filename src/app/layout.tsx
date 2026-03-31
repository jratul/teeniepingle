import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  metadataBase: new URL("https://tnpg.vercel.app"),
  title: "티니핑글",
  description: "당신의 티니핑을 찾아보세요",
  openGraph: {
    title: "티니핑글",
    description: "당신의 티니핑을 찾아보세요",
    url: "https://tnpg.vercel.app",
    siteName: "티니핑글",
    locale: "ko_KR",
    type: "website",
  },
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  display: "optional",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <div id="portal" />
        {children}
      </body>
    </html>
  );
}
