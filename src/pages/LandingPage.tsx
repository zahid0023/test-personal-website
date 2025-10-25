import AboutMe from "@/components/hero/AboutMe";
import HeroBanner from "@/components/hero/HeroBanner";

export default function LandingPage() {
    return (
        <div className="bg-[#1ba5b9] min-h-screen flex justify-center py-22">
            <div className="flex flex-col justify-center bg-[#000000] w-[90%]">
                <HeroBanner />
                <AboutMe />
            </div>
        </div>
    )
}