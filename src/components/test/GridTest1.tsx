import bannerImage1 from "../../assets/banner-image-1.jpeg";
import bannerImage2 from "../../assets/banner-image-2.jpeg";

export default function GridTest1() {
    return (
        <div className="realtive grid grid-cols-4 grid-rows-2 max-w-[1200px] max-h-[68vh] m-h-[68vh] justify-center">
            <div className="aspect-square bg-indigo-400 row-start-1 col-start-1">
                <img src={bannerImage1} alt="Banner Image 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-indigo-400 row-start-2 col-start-4">
                <img src={bannerImage2} alt="Banner Image 2" className="w-full h-full object-cover" />
            </div>

            {/* Text Overlay */}
            <div className="col-start-1 col-end-5 row-start-1 row-end-2 flex items-end justify-center w-full">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">HEY, I AM IU</p>
                    <p className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold leading-none">BOLD ARTIST</p>
                    <p className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold leading-none italic">SPECIALIST</p>
                </div>
            </div>
        </div>

    );
}
