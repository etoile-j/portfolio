import Image from "next/image";
import scrollDownIcon from "/public/img/icon/down-arrow.svg";

const Intro = () => {
    return (
        <section className="lg:items-start flex h-screen w-screen flex-col items-center justify-center">
            <div>
                <video
                    className="object-cover w-screen h-screen"
                    src="/intro.mp4"
                    autoPlay
                    muted
                    loop
                />
            </div>
            <div className="lg:ml-28 absolute text-white">
                <h1 className="font-rubik font-bold text-6xl">
                    <span className="tracking-wider">LIM SUJIN</span>
                    <br />
                    <span className="italic">FRONTEND DEVELOPER</span>
                </h1>
                <div className="w-6/12 mt-12 mb-1.5 border-y-4 border-white">
                    <p className="py-4 pl-2">안녕하세요</p>
                </div>
                <p className="pl-2">2024.10.</p>
            </div>
            <Image
                className="absolute inset-x-2/4 bottom-12 animate-bounce"
                src={scrollDownIcon}
                alt="스크롤 다운 유도 아이콘"
            />
        </section>
    );
};
export default Intro;
