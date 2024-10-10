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

    return (
        <section>
            <h2 ref={sectionTitleRef} className={`opacity-0 ${isVisible ? "animate-slideUp" : ""}`}>
                Skills
            </h2>
            <div
                ref={skillsDiv}
                className={`drop-shadow opacity-0 ${isVisibleSkills ? "animate-slideUp" : ""}`}
            >
                <ul className="flex justify-center gap-6">
                    {feIcons.map((feIcon) => {
                        return (
                            <li key={feIcon}>
                                <Image
                                    src={`/img/icon/${feIcon}.svg`}
                                    alt={feIcon}
                                    title={feIcon}
                                    width={64}
                                    height={64}
                                />
                            </li>
                        );
                    })}
                </ul>
                <div className="pt-8">
                    <ul className="flex justify-center gap-6">
                        {etcIcons.map((etcIcon) => {
                            return (
                                <li key={etcIcon}>
                                    <Image
                                        src={`/img/icon/${etcIcon}.svg`}
                                        alt={etcIcon}
                                        title={etcIcon}
                                        width={64}
                                        height={64}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Skills;
