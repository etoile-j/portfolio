interface ISpecsProps {
    period: string;
    teamInfo: string;
    skills: string[];
}
const Specs = ({ period, teamInfo, skills }: ISpecsProps) => {
    return (
        <div className="text-gray-700 pb-6 border-b border-gray-300">
            {period}
            <br />
            {teamInfo}
            <div className="sm:max-w-xl xl:max-w-max mt-1.5">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="inline-block px-2.5 py-1 mr-1 font-inconsolata text-sm rounded-2xl border border-gray-700 whitespace-nowrap leading-none"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};
export default Specs;
