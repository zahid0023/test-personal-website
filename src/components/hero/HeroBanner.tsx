import React from "react";
import bannerImage1 from "../../assets/nahin-banner-1.jpg";
import bannerImage2 from "../../assets/nahin-banner-2.jpg";
import { Button } from "../ui/button";
import "./HeroBanner.css";

const HeroBanner: React.FC = () => {
    const text1 = "HEY, I AM NAHIN";
    const text2 = "BOLD ARTIST";
    const text3 = "Specialist";

    // Function to render letters with animation delay
    const renderAnimatedText = (text: string, className: string, delayOffset: number = 0) => {
        return text.split("").map((char, index) => (
            <span
                key={index}
                className={`fade-letter ${className}`}
                style={{ animationDelay: `${delayOffset + index * 0.08}s` }}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    // Calculate sequential delay offsets
    const delay1 = 0;
    const delay2 = text1.length * 0.08 + 0.5;
    const delay3 = delay2 + text2.length * 0.08 + 0.5;

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
                        <p className="hero-text-1">{renderAnimatedText(text1, "hero-text-1", delay1)}</p>
                        <p className="hero-text-2 font-bold leading-none">{renderAnimatedText(text2, "hero-text-2", delay2)}</p>
                    </div>
                    <div>
                        <p className="vollkorn hero-text-3 italic leading-none">{renderAnimatedText(text3, "hero-text-3", delay3)}</p>
                    </div>
                </div>
            </div>

            <div className="col-start-2 col-end-4 row-start-2 row-end-3 flex flex-col justify-start mt-3 items-center gap-2">
                <p className="gidole-regular text-4 font-light leading-2">
                    PASSIONATE ABOUT BOLD, INNOVATIVE ACTING. I COMBINE CREATIVITY AND STRATEGY
                    TO CRAFT VISUAL EXPERIENCE THAT RESONATE AS A SPECIALIST
                </p>
                <Button
                    variant={"default"}
                    className="bg-amber-900 font-light text-[.4rem] rounded-none rounded-tl-[3px] rounded-br-[3px] py-[5px] h-auto"
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    );
};

export default HeroBanner;
