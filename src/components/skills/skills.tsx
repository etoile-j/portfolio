"use client";
import { useRef } from "react";
import Image from "next/image";
import useSlideUp from "@/hooks/useSlideUp";
import { feIcons, etcIcons } from "@/data";
import { SECTIONS } from "@/constants";

const Skills = () => {
    const skillsDiv = useRef<HTMLDivElement | null>(null);
    const { isVisible } = useSlideUp(skillsDiv);

    const renderIcons = (icons: string[]) => (
        <ul className="flex flex-wrap-reverse justify-center gap-3.5 md:gap-6 xl:gap-8">
            {icons.map((icon, index) => (
                <li
                    key={icon}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className={`opacity-0 ${isVisible ? "animate-slideUpFast group" : ""}`}
                >
                    <Image
                        src={`/images/icons/${icon}.svg`}
                        alt={icon}
                        width={64}
                        height={64}
                        className="relative drop-shadow-md z-10"
                    />
                    <p className="invisible group-hover:visible !z-20 absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2 font-inconsolata bg-gray-100 rounded px-2 rounded-xl">
                        {icon}
                    </p>
                </li>
            ))}
        </ul>
    );

    return (
        <section className="mb-28">
            <h2 id="skills">{SECTIONS.SKILL_SET}</h2>
            <div ref={skillsDiv} className={`opacity-0 ${isVisible ? "animate-slideUp" : ""}`}>
                {renderIcons(feIcons)}
            </div>
            <div className={`opacity-0 pt-12 ${isVisible ? "animate-slideUp" : ""}`}>
                {renderIcons(etcIcons)}
            </div>
        </section>
    );
};
export default Skills;
