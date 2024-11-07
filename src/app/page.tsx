import Intro from "@/components/intro/intro";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";
import Footer from "@/components/footer/footer";

const Home = () => {
    return (
        <>
            <main className="relative">
                <Intro />
                <div className="relative z-10">
                    <div className="h-screen" />
                    <div className="md:px-24 xl:px-32 text-center bg-white">
                        <Skills />
                        <Project />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Home;
