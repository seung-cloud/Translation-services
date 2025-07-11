// app/layout.tsx (next-auth 적용 예시)
'use client';
import "./globals.css";
import Script from "next/script";
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession();

  if (status === "loading") return null; // 로딩 중에는 아무것도 표시 안함

  return (
    <nav className="w-full bg-white px-8 py-4 flex justify-between items-center shadow">
      <div className="text-xl font-bold text-blue-700 flex items-center gap-2">
        <span>🌐</span> AI 번역 서비스
      </div>
      <div className="text-gray-700 flex items-center gap-4">
        {!session ? (
          <button onClick={() => signIn()} className="hover:underline">
            로그인
          </button>
        ) : (
          <>
            <span>{session.user?.name || "사용자"}님 환영합니다!</span>
            <button onClick={() => signOut()} className="hover:underline">
              로그아웃
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <Script src="https://cdn.iamport.kr/v1/iamport.js" strategy="beforeInteractive" />
        <title>AI 번역 서비스</title>
      </head>
      <body className="bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen">
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
