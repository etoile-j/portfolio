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
    return (
        <section>
            <h2>Skills</h2>
            <div className="drop-shadow">
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
