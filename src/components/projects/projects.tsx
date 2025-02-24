"use client";
import { useRef } from "react";
import ProjectCard from "./projectCard/projectCard";
import useSlideUp from "@/hooks/useSlideUp";
import { projects } from "@/data";
import { IProjectData } from "@/types";
import { SECTIONS } from "@/constants";

const Projects = () => {
    const sectionTitleRef = useRef<HTMLHeadingElement | null>(null);
    const { isVisible } = useSlideUp(sectionTitleRef);

    return (
        <section className="max-w-[1190px] mx-auto">
            <h2 className={isVisible ? "animate-slideUp" : ""} ref={sectionTitleRef}>
                {SECTIONS.PROJECTS}
            </h2>
            <div className="text-left xl:overflow-hidden">
                {projects.map((project: IProjectData) => (
                    <ProjectCard key={project.title} projectData={project} />
                ))}
            </div>
        </section>
    );
};
export default Projects;
