import Intro from "@/components/intro/intro";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";

const Home = () => {
    return (
        <main>
            <Intro />
            <div className="md:mx-24 xl:mx-32 text-center">
                <Skills />
                <Project />
            </div>
        </main>
    );
};
export default Home;
