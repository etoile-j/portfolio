import Intro from "@/components/intro/intro";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";
import Footer from "@/components/footer/footer";

const Home = () => {
    return (
        <>
            <main>
                <Intro />
                <div className="md:mx-24 xl:mx-32 text-center">
                    <Skills />
                    <Project />
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Home;
