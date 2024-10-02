import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "임수진 | 프론트엔드 개발자",
    description: "프론트엔드 개발자 임수진 포트폴리오",
    robots: "noindex, nofollow",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="ko">
            <body className={notoSansKR.className}>{children}</body>
        </html>
    );
};
export default RootLayout;
