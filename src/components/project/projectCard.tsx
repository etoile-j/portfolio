import Specs from "./specs";
import Links from "./links";
import { IProjectData } from "@/types";

const ProjectCard = ({
    projectData: { title, titleDescription, specs, highlights, links },
}: {
    projectData: IProjectData;
}) => {
    return (
        <>
            <div className="ml-2.5">
                <div>{titleDescription}</div>
                <h3 className="font-poppins italic text-3xl">{title}</h3>
            </div>
            <div className="mt-6 mb-20">
                <div className="flex lg:justify-normal lg:flex-nowrap flex-wrap-reverse bg-gray-100 rounded-3xl">
                    <div className="p-7 md:p-9 min-w-fit break-keep">
                        <Specs specs={specs} />
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
                    <Links links={links} imgFile={title} />
                </div>
            </div>
        </>
    );
};
export default ProjectCard;
