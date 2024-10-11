import Specs from "./specs";

interface ProjectData {
    title: string;
    titleDescription: string;
    period: string;
    teamInfo: string;
    skills: string[];
    highlights: { title: string; description: string }[];
}
const ProjectCard = ({
    projectData: { title, titleDescription, period, teamInfo, skills, highlights },
}: {
    projectData: ProjectData;
}) => {
    return (
        <div className="text-left overflow-hidden">
            <div className="ml-2.5">
                <div>{titleDescription}</div>
                <h3 className="font-poppins italic text-3xl">{title}</h3>
            </div>
            <div className="mt-6 mb-20">
                <div className="flex bg-gray-100 rounded-3xl">
                    <div className="p-9 min-w-max">
                        <Specs period={period} teamInfo={teamInfo} skills={skills} />
                        <ul className="pt-6">
                            {/* <ul className="pt-6 break-keep"> */}
                            {highlights.map((highlight, index) => (
                                <li key={index}>
                                    <div className="text-xl font-bold">{highlight.title}</div>
                                    <div className="mt-1.5 mb-7 whitespace-pre-line	text-gray-700">
                                        {highlight.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="max-w-[453px]" src="/img/whobego.png" alt="whobego" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;