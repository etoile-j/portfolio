import Intro from "@/components/intro/intro";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";

const Home = () => {
    return (
        <main>
            <Intro />
            <div className="lg:mx-16 xl:mx-28 text-center">
                <Skills />
                <Project />
            </div>
        </main>
    );
};
export default Home;
