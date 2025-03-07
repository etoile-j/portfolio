"use client";
import Image from "next/image";
import { socialLinks, projects } from "@/data";
import { useVisibleArea } from "@/hooks/useVisibleArea";
import { SECTIONS } from "@/constants";

const NavigationMenu = () => {
    const visibleArea = useVisibleArea();

    return (
        <nav className="w-[214px] px-5 py-6 bg-white text-left rounded-2xl border border-gray-200 shadow-md">
            <ul className="pb-4">
                {socialLinks.map((link) => (
                    <li key={link.title} className="mb-2">
                        <a
                            href={link.url}
                            {...(link.isExternal && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                            className="flex items-center w-full py-1 hover:bg-gray-100 hover:rounded-2xl"
                        >
                            <Image
                                src={link.icon}
                                alt=""
                                width={24}
                                height={24}
                                className="ml-4 mr-2.5"
                            />
                            <span>{link.title}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <ol className="pt-4 border-t border-gray-200">
                <li className="h-8 relative nav-item mb-1">
                    <a
                        href="#skills"
                        className={`flex items-center pl-4 font-bold text-lg hover:text-violet-400 ${
                            visibleArea === "skills" ? "text-violet-400" : ""
                        }`}
                    >
                        <span>{SECTIONS.SKILL_SET}</span>
                    </a>
                </li>
                <li>
                    <div className="h-8 pl-4 font-bold text-gray-600 text-lg">
                        {SECTIONS.PROJECTS}
                    </div>
                    <ol className="font-normal text-base">
                        {projects.map((project) => (
                            <li key={project.title} className="relative nav-item pl-9 mt-1">
                                <a
                                    href={`#${project.title}`}
                                    className={`block w-full hover:text-violet-400 ${
                                        visibleArea === project.title ? "text-violet-400" : ""
                                    }`}
                                >
                                    {project.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </li>
            </ol>
        </nav>
    );
};

export default NavigationMenu;
