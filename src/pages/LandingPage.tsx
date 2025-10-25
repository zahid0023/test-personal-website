import AboutMe from "@/components/hero/AboutMe";
import HeroBanner from "@/components/hero/HeroBanner";
import NavBar from "@/components/hero/NavBar";

export default function LandingPage() {
    return (
        <div className="bg-[#1ba5b9] min-h-screen flex justify-center items-start py-[1.4rem]">
            <div className="flex flex-col justify-center bg-[#000000] w-[90%]">
                <NavBar />
                <HeroBanner />
                <AboutMe />
            </div>
        </div>
    )
}