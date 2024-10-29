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
            <div className="sm:ml-12 lg:ml-28 xl:ml-36 2xl:mx-56 absolute text-white">
                <div className="absolute sm:top-[-70px] md:top-[-100px] left-[-50px] w-[260px] h-[260px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-yellow-400 to-yellow-300 drop-shadow-sm rounded-full origin-center animate-grow" />
                <h1 className="font-rubik font-bold text-5xl md:text-6xl">
                    <span
                        className="inline-block animate-slideInLeft opacity-0 drop-shadow-sm tracking-wider"
                        style={{ animationDelay: "0.3s" }}
                    >
                        LIM SUJIN
                    </span>
                    <br />
                    <span
                        className="inline-block font-poppins italic animate-flipDown opacity-0"
                        style={{ animationDelay: "0.8s" }}
                    >
                        FRONTEND DEVELOPER
                    </span>
                </h1>
                <div className="animate-flipDown opacity-0" style={{ animationDelay: "1.1s" }}>
                    <div className="w-[320px] mt-12 mb-1.5 border-y-4 border-white">
                        <p className="py-4 pl-2">안녕하세요!</p>
                    </div>
                    <p className="pl-2 text-gray-200">2024.10.</p>
                </div>
            </div>
            <Image
                className="absolute bottom-12 animate-bounce"
                src={scrollDownIcon}
                alt="스크롤 다운 유도 아이콘"
            />
        </section>
    );
};
export default Intro;
