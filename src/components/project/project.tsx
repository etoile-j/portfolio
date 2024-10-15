"use client";
import { useRef } from "react";
import ProjectCard from "./projectCard";
import useSlideUp from "@/hooks/useSlideUp";
import { meetsin, ourshop, whobego } from "@/data";

const Project = () => {
    const sectionTitleRef = useRef<HTMLHeadingElement | null>(null);
    const meetsinRef = useRef<HTMLDivElement | null>(null);
    const ourshopRef = useRef<HTMLDivElement | null>(null);
    const whobegoRef = useRef<HTMLDivElement | null>(null);

    const { isVisible } = useSlideUp(sectionTitleRef);
    const { isVisible: isVisibleMeetsin } = useSlideUp(meetsinRef, 0.2);
    const { isVisible: isVisibleOurshop } = useSlideUp(ourshopRef, 0.2);
    const { isVisible: isVisibleWhobego } = useSlideUp(whobegoRef, 0.2);

    return (
        <section className="max-w-[1200px] mx-auto">
            <h2 className={isVisible ? "animate-slideUp" : ""} ref={sectionTitleRef}>
                Project
            </h2>
            <div className="text-left lg:overflow-hidden">
                <div
                    className={`opacity-0 ${isVisibleMeetsin ? "animate-slideUp" : ""}`}
                    ref={meetsinRef}
                >
                    <ProjectCard projectData={meetsin} />
                </div>
                <div
                    className={`opacity-0 ${isVisibleOurshop ? "animate-slideUp" : ""}`}
                    ref={ourshopRef}
                >
                    <ProjectCard projectData={ourshop} />
                </div>
                <div
                    className={`opacity-0 ${isVisibleWhobego ? "animate-slideUp" : ""}`}
                    ref={whobegoRef}
                >
                    <ProjectCard projectData={whobego} />
                </div>
            </div>
        </section>
    );
};
export default Project;
