import bannerImage1 from "../../assets/banner-image-1.jpeg";
import bannerImage2 from "../../assets/banner-image-2.jpeg";
import { Button } from "../ui/button";

export default function HeroBanner() {
    return (
        <div className="flex justify-center"> {/* centers the whole banner */}
            <div className="relative mt-22"> {/* relative parent is the grid wrapper */}

                {/* Grid */}
                <div className="grid grid-cols-[repeat(4,300px)] grid-rows-[repeat(2,300px)] justify-center gap-4">
                    {/* Box 1 */}
                    <div className="flex items-center justify-center text-white text-xl font-semibold">
                        <img
                            src={bannerImage1}
                            alt="Banner Image 1"
                            className="w-full h-full object-cover rounded-2xl border-2 border-white"
                        />
                    </div>

                    {/* Box 2 (spanning 2 columns) */}
                    <div className="col-span-2 text-white relative">
                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[7rem] italic m-0 leading-none">
                            SPECIALIST
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="flex items-start justify-center relative">
                        <img
                            src={bannerImage2}
                            alt="Banner Image 2"
                            className="w-full h-full object-cover rounded-2xl border border-white relative translate-y-2/3"
                        />
                    </div>

                    {/* Box 4 */}
                    <div className="flex items-center justify-center text-white text-xl font-semibold"></div>

                    {/* Box 5-6: Text + Button */}
                    <div className="flex flex-col items-center justify-start gap-7 col-span-2 text-white py-9 h-full">
                        <div>
                            <p className="text-[14px] text-center">
                                PASSIONATE ABOUT BOLD, INNOVATIVE ART. I COMBINE CREATIVITY AND STRATEGY <br />
                                TO CRAFT VISUAL EXPERIENCE THAT RESONATE AS A SPECIALIST.
                            </p>
                        </div>
                        <div className="m-4">
                            <Button className="relative inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-[4px] shadow-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                                <span className="mr-3">Learn More</span>
                                <span className="transition-transform duration-300 transform group-hover:translate-x-2">→</span>
                            </Button>
                        </div>
                    </div>

                    {/* Box 7 */}
                    <div className="flex items-center justify-center overflow-hidden"></div>
                </div>

                {/* Overlay text now positioned relative to the grid */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-full h-[300px] z-10 pointer-events-none text-white">
                    <p className="text-[12px] font-semibold">HEY, I AM IU</p>
                    <p className="text-9xl font-bold">BOLD ARTIST</p>
                </div>

            </div>
        </div>
    );
}

