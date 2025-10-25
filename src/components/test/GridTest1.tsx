import bannerImage1 from "../../assets/banner-image-1.jpeg";
import bannerImage2 from "../../assets/banner-image-2.jpeg";
import { Button } from "../ui/button";

export default function GridTest1() {
    return (
        <div className="grid grid-cols-4 grid-rows-2 bg-black text-white px-[.4rem]">
            <div className="aspect-square row-start-1 col-start-1">
                <img src={bannerImage1} alt="Banner Image 1" className="rounded-2xl w-full h-full object-cover" />
            </div>

            <div className="aspect-square row-start-2 row-end-3 col-start-4 col-end-5 mt-[-1.3rem]">
                <img src={bannerImage2} alt="Banner Image 2" className="rounded-2xl w-full h-full object-cover" />
            </div>

            {/* Text Overlay */}
            <div className="col-start-1 col-end-5 row-start-1 row-end-2 flex justify-center items-end w-full">
                <div className="flex flex-col items-center justify-end">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[.4rem]">HEY, I AM IU</p>
                        <p className="text-[2.3rem] leading-none">BOLD ARTIST</p>
                    </div>
                    <div>
                        <p className="text-[2.3rem] italic leading-none">SPECIALIST</p>
                    </div>
                </div>
            </div>

            <div className="col-start-2 col-end-4 row-start-2 row-end-3 flex flex-col justify-start mt-3 items-center gap-2">
                <p className="text-[.32rem] font-light leading-2">
                    PASSIONATE ABOUT BOLD, INNOVATIVE ACTING. I COMBINE CREATIVITY AND STRATEGY
                    TO CRAFT VISUAL EXPERIENCE THAT RESONATE AS A SPECIALIST
                </p>
                <Button variant={"default"} className="bg-amber-900 font-light text-[.4rem] rounded-none rounded-tl-[3px] rounded-br-[3px] py-[5px] h-auto">GET STARTED</Button>
            </div>
        </div>

    );
}
