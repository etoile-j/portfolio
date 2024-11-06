import { IProjectSpecs } from "@/types";

const ProjectSpecs = ({ specs: { period, teamInfo, skills } }: { specs: IProjectSpecs }) => {
    return (
        <header className="text-gray-700 pb-6 border-b border-gray-300">
            <p>{period}</p>
            <p>{teamInfo}</p>
            {skills.all ? (
                <ul className="max-w-xl mt-1.5">
                    {skills.all.map((skill, index) => (
                        <li
                            key={index}
                            className="inline-block px-2.5 py-1 mr-1 font-inconsolata text-sm rounded-2xl border border-gray-700 whitespace-nowrap leading-none"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category}>
                            <span className="mr-2">{category}</span>
                            <ul className="inline">
                                {skillList.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="inline-block px-2.5 py-1 mr-1 font-inconsolata text-sm rounded-2xl border border-gray-700 whitespace-nowrap leading-none"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            )}
        </header>
    );
};
export default ProjectSpecs;
