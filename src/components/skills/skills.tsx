"use client";
import { useRef } from "react";
import Image from "next/image";
import useSlideUp from "@/hooks/useSlideUp";

const feIcons = [
    "HTML",
    "CSS",
    "Sass",
    "StyledComponents",
    "JavaScript",
    "TypeScript",
    "React",
    "Jotai",
    "Jest",
];

const etcIcons = ["Git", "GitHub", "GitHubActions", "Notion", "Figma", "Jira"];

const Skills = () => {
    const skillsDiv = useRef<HTMLDivElement | null>(null);
    const { isVisible: isVisibleSkills } = useSlideUp(skillsDiv);

    const renderIcons = (icons: string[]) => (
        <ul className="flex flex-wrap justify-center gap-3.5 md:gap-6 xl:gap-10 drop-shadow">
            {icons.map((icon, index) => (
                <li
                    key={icon}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className={`opacity-0 ${isVisibleSkills ? "animate-slideUpFast" : ""}`}
                >
                    <Image
                        src={`/img/icon/${icon}.svg`}
                        alt={icon}
                        title={icon}
                        width={64}
                        height={64}
                    />
                </li>
            ))}
        </ul>
    );

    return (
        <section className="mb-28">
            <h2>Skills</h2>
            <div
                ref={skillsDiv}
                className={`opacity-0 ${isVisibleSkills ? "animate-slideUp" : ""}`}
            >
                {renderIcons(feIcons)}
            </div>
            <div className={`pt-12 opacity-0 ${isVisibleSkills ? "animate-slideUp" : ""}`}>
                {renderIcons(etcIcons)}
            </div>
        </section>
    );
};
export default Skills;
