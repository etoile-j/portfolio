import Intro from "@/components/intro/intro";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";
import NavigationMenu from "@/components/navigation/navigationMenu";

const Home = () => {
    return (
        <>
            <main className="relative">
                <Intro />
                <div className="relative z-10">
                    <div className="h-screen" />
                    <div className="relative md:px-7 xl:px-32 text-center bg-white">
                        <div className="relative flex justify-center">
                            <div className="hidden md:block w-[234px] pt-16 shrink-0">
                                <div className="sticky top-16 left-8">
                                    <NavigationMenu />
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-[1190px]">
                                <Skills />
                                <div className="md:hidden z-10 sticky top-8">
                                    <Navigation />
                                </div>
                                <Projects />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Home;
