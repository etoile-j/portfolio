import { IProjectLinks } from "@/types";

interface ILinksProps {
    links: IProjectLinks;
    imgFile?: string;
}

const linkNameMap = {
    github: "GitHub",
    liveService: "Service",
    figma: "Figma",
};

const Links = ({ links, imgFile }: ILinksProps) => {
    return (
        <div className="flex items-center mx-auto">
            <div className="relative">
                <img
                    className="max-w-[400px] lg:max-w-[700px] pt-4"
                    src={`/img/${imgFile}.png`}
                    alt=""
                />

                <ul className="absolute bottom-[20px] flex gap-2 lg:flex-col-reverse">
                    <>
                        {Object.keys(links).map((key) => {
                            const linkKey = key as keyof IProjectLinks;
                            return (
                                <li key={key}>
                                    <a
                                        href={links[linkKey]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center pl-1 w-[40px] h-[40px] backdrop-blur rounded-full border-violet-400 border-2 overflow-hidden transition-all duration-300 hover:w-[110px] group drop-shadow"
                                    >
                                        <img
                                            src={`/img/icon/${linkNameMap[linkKey]}.svg`}
                                            className="inline-block w-[28px] h-[28px] rounded-full"
                                            alt=""
                                        />
                                        <span className="opacity-0 transition-opacity duration-300 ml-1.5 group-hover:opacity-100 font-bold bg-clip-text text-transparent key-gradient">
                                            {linkNameMap[linkKey]}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </>
                </ul>
            </div>
        </div>
    );
};
export default Links;
