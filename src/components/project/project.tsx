import ProjectCard from "./projectCard";

const meetsin = {
    title: "meetsin",
    titleDescription: "실시간 비대면 스터디룸 서비스",
    period: "2023.09 - 진행 중",
    teamInfo: "팀 프로젝트 (3인) | 프론트엔드, 백엔드, 디자인 담당",
    skills: [
        "TypeScript",
        "Socket.IO",
        "Next.js",
        "TanStack Query",
        "Jotai",
        "SCSS",
        "NextJS",
        "MongoDB",
        "Mongoose",
        "AWS EC2",
        "Nginx",
    ],
    highlights: [
        {
            title: "제목",
            description: "내용",
        },
    ],
};

const ourshop = {
    title: "OUR SHOP",
    titleDescription: "오픈마켓 형태의 온라인 쇼핑몰",
    period: "2022.09-11 (2개월)",
    teamInfo: "개인 프로젝트",
    skills: [
        "React",
        "TypeScript",
        "Styled-Components",
        "React-Query",
        "React-Testing-Library",
        "Jest",
        "MSW",
        "Github Actions",
    ],
    highlights: [
        {
            title: "제목",
            description: "내용",
        },
    ],
};

const whobego = {
    title: "who-be-go",
    titleDescription: "후기 무비 고 | 나만의 영화 감상 기록장",
    period: "2022.08 (2주)",
    teamInfo: "팀 프로젝트 (6인) | 프론트엔드 담당",
    skills: ["TypeScript", "HTML", "SCSS"],
    highlights: [
        {
            title: "제목",
            description: "내용",
        },
    ],
};

const Project = () => {
    return (
        <section>
            <h2>Project</h2>
            <ProjectCard projectData={meetsin} />
            <ProjectCard projectData={ourshop} />
            <ProjectCard projectData={whobego} />
        </section>
    );
};
export default Project;
