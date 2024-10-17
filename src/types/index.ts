export type SkillsType = Record<string, string[]>;

export interface IProjectSpecs {
    period: string;
    teamInfo: string;
    skills: SkillsType;
}

export interface IProjectLinks {
    github: string;
    liveService?: string;
    figma?: string;
}

export interface IProjectData {
    title: string;
    titleDescription: string;
    specs: IProjectSpecs;
    highlights: { title: string; description: string }[];
    links: IProjectLinks;
}
