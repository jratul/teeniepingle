import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tnpg.vercel.app"),
  title: "티니핑 도감",
  description: "당신의 티니핑을 찾아보세요",
  openGraph: {
    title: "티니핑 도감",
    description: "당신의 티니핑을 찾아보세요",
    url: "https://tnpg.vercel.app",
    siteName: "티니핑 도감",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div id="portal" />
        {children}
        {/* 한글 폰트 비동기 로드 — 렌더 블로킹 없이 페이지 인터랙티브 후 삽입 */}
        <Script
          id="gfonts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Jua&family=Noto+Sans+KR:wght@400;500;700;900&display=swap';document.head.appendChild(l);})();`,
          }}
        />
      </body>
    </html>
  );
}
