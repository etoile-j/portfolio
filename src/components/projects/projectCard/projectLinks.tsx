import Image from "next/image";
import { IProjectLinks } from "@/types";

const LINK_NAME_MAP = {
    github: "GitHub",
    liveService: "Service",
    figma: "Figma",
} as const;

type LinkKey = keyof typeof LINK_NAME_MAP;

const ProjectLinks = ({ links, imgFile }: { links: IProjectLinks; imgFile: string }) => {
    return (
        <div className="flex items-center mx-auto">
            <div className="relative p-10">
                <Image
                    className="w-full xl:w-auto min-w-0 md:min-w-[300px] max-w-[465px] xl:max-w-[640px] pt-5"
                    src={`/images/${imgFile}.png`}
                    alt="프로젝트 대표 이미지"
                    width={640}
                    height={400}
                />

                <ul className="absolute bottom-[20px] flex gap-2 2xl:flex-col-reverse">
                    {(Object.keys(links) as LinkKey[]).map((key) => (
                        <li key={key}>
                            <a
                                href={links[key]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center pl-1 w-[40px] h-[40px] bg-white rounded-full border-violet-400 border-2 overflow-hidden transition-all duration-300 hover:w-[110px] group"
                            >
                                <Image
                                    src={`/images/icons/${LINK_NAME_MAP[key]}.svg`}
                                    className="inline-block w-[28px] h-[28px] rounded-full"
                                    alt={LINK_NAME_MAP[key]}
                                    width={28}
                                    height={28}
                                />
                                <span className="opacity-0 transition-opacity duration-300 ml-1.5 group-hover:opacity-100 font-bold text-violet-400">
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
