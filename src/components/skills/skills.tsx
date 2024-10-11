"use client";
import { useRef } from "react";
import useSlideUp from "@/hooks/useSlideUp";
import Image from "next/image";

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

const etcIcons = ["Git", "Github", "GithubActions", "Notion", "Figma", "Jira"];

const Skills = () => {
    const sectionTitleRef = useRef<HTMLHeadingElement | null>(null);
    const skillsDiv = useRef<HTMLDivElement | null>(null);

    const { isVisible } = useSlideUp(sectionTitleRef);
    const { isVisible: isVisibleSkills } = useSlideUp(skillsDiv);

    const renderIcons = (icons: string[]) => (
        <ul className="flex justify-center gap-3.5 md:gap-6 xl:gap-10">
            {icons.map((icon) => (
                <li key={icon}>
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
        <section>
            <h2 ref={sectionTitleRef} className={`opacity-0 ${isVisible ? "animate-slideUp" : ""}`}>
                Skills
            </h2>
            <div
                ref={skillsDiv}
                className={`drop-shadow opacity-0 ${isVisibleSkills ? "animate-slideUp" : ""}`}
            >
                {renderIcons(feIcons)}
            </div>
            <div className="pt-8">{renderIcons(etcIcons)}</div>
        </section>
    );
};
export default Skills;
