import Image from "next/image";
import { projects } from "@/data";

const NavigationMenu = () => {
    return (
        <nav className="w-[214px] px-5 py-6 bg-white text-left rounded-2xl border border-gray-200 shadow-md">
            <ul className="pb-4">
                <li className="mb-2">
                    <a
                        href="https://github.com/etoile-j"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full py-1 hover:bg-gray-100 hover:rounded-2xl"
                    >
                        <Image
                            src="/img/icon/GitHub.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                            className="ml-4 mr-2.5"
                        />
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:etoile.1jjj@gmail.com"
                        className="flex items-center w-full py-1 hover:bg-gray-100 hover:rounded-2xl"
                    >
                        <Image
                            src="/img/icon/email.svg"
                            alt="Email"
                            width={24}
                            height={24}
                            className="ml-4 mr-2.5"
                        />
                        <span>Email</span>
                    </a>
                </li>
            </ul>
            <ol className="pt-4 border-t border-gray-200">
                <li className="h-8 relative nav-item mb-1">
                    <a
                        href="#skills"
                        className="flex items-center pl-4 font-bold text-gray-700 text-lg hover:text-violet-400"
                    >
                        <span>Skills</span>
                    </a>
                </li>
                <li>
                    <div className="h-8 pl-4 font-bold text-lg">Projects</div>
                    <ol className="font-normal text-base">
                        {projects.map((project) => (
                            <li key={project.title} className="relative nav-item pl-9 mt-1">
                                <a
                                    href={`#${project.title}`}
                                    className="block w-full hover:text-violet-400"
                                >
                                    {project.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </li>
            </ol>
        </nav>
    );
};
export default NavigationMenu;
