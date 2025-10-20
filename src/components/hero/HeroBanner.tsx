import bannerImage1 from "../../assets/banner-image-1.jpeg";
import bannerImage2 from "../../assets/banner-image-2.jpeg";
import { Button } from "../ui/button";

export default function HeroBanner() {
    return (
        <div>
            <div className="grid grid-cols-[repeat(4,300px)] grid-rows-[repeat(2,300px)] bg-blue-500 justify-center p-0 m-0">
                <div className="bg-blue-500 flex items-center justify-center text-white text-xl font-semibold">
                    <img src={bannerImage1}
                        alt="Banner Image 1"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="bg-blue-500 col-span-2 text-white relative">
                    <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[7rem] italic m-0 leading-none">
                        SPECIALIST
                    </p>
                </div>

                <div className="bg-blue-500 flex items-start justify-center relative">
                    <img src={bannerImage2}
                        alt="Banner Image 2"
                        className="w-full h-full object-cover relative translate-y-2/3"
                    />
                </div>
                <div className="bg-blue-500 flex items-center justify-center text-white text-xl font-semibold">
                </div>
                <div className="bg-blue-500 flex flex-col items-center justify-start gap-7 col-span-2 text-white py-9 h-full">
                    <div>
                        <p className="text-[14px] text-center">
                            PASSIONATE ABOUT BOLD, INNOVATIVE ART. I COMBINE CREATIVITY AND STRATEGY <br />
                            TO CRAFT VISUAL EXPERIENCE THAT RESONATE AS A SPECIALIST.
                        </p>
                    </div>
                    <div>
                        <Button className="hover:cursor-pointer">Learn More</Button>
                    </div>
                </div>

                {/* Box 8 - Second image again, 300x300 */}
                <div className="flex items-center justify-center overflow-hidden">
                </div>
            </div>
            {/* Overlapping text centered over boxes 1–4 */}
            <div className="absolute top-9 left-1/2 -translate-x-1/2 flex flex-col items-center w-[1200px] h-[300px] z-10 pointer-events-none text-white">
                <p className="text-[12px] font-semibold">HEY, I AM IU</p>
                <p className="text-9xl font-bold">BOLD ARTIST</p>
            </div>
        </div>
    );
}
