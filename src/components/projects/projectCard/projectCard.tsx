import { useRef } from "react";
import ProjectSpecs from "./projectSpecs";
import ProjectLinks from "./projectLinks";
import useSlideUp from "@/hooks/useSlideUp";
import { IProjectData } from "@/types";

const ProjectCard = ({
    projectData: { title, titleDescription, specs, highlights, links },
}: {
    projectData: IProjectData;
}) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const { isVisible } = useSlideUp(cardRef, 0.1);

    return (
        <article ref={cardRef} className={`opacity-0 ${isVisible ? "animate-slideUp" : ""}`}>
            <div id={title} className="ml-2.5">
                <div>{titleDescription}</div>
                <h3 className="font-poppins italic text-3xl">{title}</h3>
            </div>
            <div className="mt-6 pb-28">
                <div className="flex xl:justify-normal 2xl:flex-nowrap flex-wrap-reverse bg-gray-100 rounded-3xl">
                    <div className="p-7 md:p-9 min-w-fit break-keep">
                        <ProjectSpecs specs={specs} />
                        <ul className="pt-6">
                            {highlights.map((highlight, index) => (
                                <li key={index}>
                                    <div className="text-xl font-bold">{highlight.title}</div>
                                    <div className="mt-1.5 mb-7 whitespace-pre-line text-gray-700">
                                        {highlight.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ProjectLinks links={links} imgFile={title} />
                </div>
            </div>
        </article>
    );
};
export default ProjectCard;
