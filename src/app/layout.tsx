import type { Metadata } from "next";
import { Noto_Sans_KR, Rubik, Poppins, Inconsolata } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "임수진 | 프론트엔드 개발자",
    description: "프론트엔드 개발자 임수진 포트폴리오",
    robots: "noindex, nofollow",
};

const notoSansKR = Noto_Sans_KR({
    weight: ["400", "700"],
    subsets: ["latin"],
});
const rubik = Rubik({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-rubik",
});
const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const inconsolata = Inconsolata({
    weight: ["500"],
    subsets: ["latin"],
    variable: "--font-inconsolata",
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="ko">
            <body
                className={`${notoSansKR.className} ${rubik.variable} ${poppins.variable} ${inconsolata.variable}`}
            >
                {children}
            </body>
        </html>
    );
};
export default RootLayout;
