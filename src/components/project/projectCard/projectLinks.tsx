import { useRef } from "react";
import Image from "next/image";
import { IProjectLinks } from "@/types";
import useSlideUp from "@/hooks/useSlideUp";

const LINK_NAME_MAP = {
    github: "GitHub",
    liveService: "Service",
    figma: "Figma",
} as const;

type LinkKey = keyof typeof LINK_NAME_MAP;

const ProjectLinks = ({ links, imgFile }: { links: IProjectLinks; imgFile: string }) => {
    const imgRef = useRef<HTMLDivElement | null>(null);
    const { isVisible } = useSlideUp(imgRef, 0.2);

    return (
        <div className="flex items-center mx-auto">
            <div
                ref={imgRef}
                className={`relative opacity-0 ${isVisible ? "animate-slideInRight" : ""}`}
            >
                <Image
                    className="max-w-[360px] lg:max-w-[660px] pt-5"
                    src={`/img/${imgFile}.png`}
                    alt="프로젝트 대표 이미지"
                    width={690}
                    height={400}
                />

                <ul className="absolute bottom-[20px] flex gap-2 lg:flex-col-reverse">
                    {(Object.keys(links) as LinkKey[]).map((key) => (
                        <li key={key}>
                            <a
                                href={links[key]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center pl-1 w-[40px] h-[40px] backdrop-blur rounded-full border-violet-400 border-2 overflow-hidden transition-all duration-300 hover:w-[110px] group"
                            >
                                <Image
                                    src={`/img/icon/${LINK_NAME_MAP[key]}.svg`}
                                    className="inline-block w-[28px] h-[28px] rounded-full"
                                    alt={LINK_NAME_MAP[key]}
                                    width={28}
                                    height={28}
                                />
                                <span className="opacity-0 transition-opacity duration-300 ml-1.5 group-hover:opacity-100 font-bold bg-clip-text text-transparent key-gradient">
                                    {LINK_NAME_MAP[key]}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default ProjectLinks;
