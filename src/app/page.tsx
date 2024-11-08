import Intro from "@/components/intro/intro";
import Skills from "@/components/skills/skills";
import Project from "@/components/project/project";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";

const Home = () => {
    return (
        <>
            <main className="relative">
                <Intro />
                <div className="relative z-10">
                    <div className="h-screen" />
                    <div className="relative md:px-24 xl:px-32 text-center bg-white">
                        <div className="relative">
                            <Skills />
                            <div className="z-10 sticky top-8">
                                <Navigation />
                            </div>
                            <Project />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Home;
