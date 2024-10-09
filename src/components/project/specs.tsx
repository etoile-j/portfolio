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
            <div>
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-2.5 py-1 mr-1 font-inconsolata text-sm rounded-2xl border border-gray-700"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};
export default Specs;
