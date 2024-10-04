import Intro from "@/components/intro/intro";
import Skills from "@/components/skills/skills";

const Home = () => {
    return (
        <main>
            <Intro />
            <div className="lg:mx-28 text-center">
                <Skills />
            </div>
        </main>
    );
};
export default Home;
