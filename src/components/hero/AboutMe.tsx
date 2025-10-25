import aboutmeImage from '../../assets/iu-about-me.png';

export default function AboutMe() {
    return (
        <div className="flex justify-center mb-22">
            <div className="text-white w-[1200px]">
                {/* Section Title */}
                <h1 className="text-3xl text-[#008080] md:text-3xl font-bold mb-12 text-center md:text-left">
                    ABOUT ME
                </h1>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    {/* Image */}
                    <img
                        src={aboutmeImage}
                        alt="About Me"
                        className="w-[300px] h-[300px] object-cover rounded-2xl border-2 border-white"
                    />

                    {/* Text */}
                    <p className="font-semibold text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-snug text-center md:text-left">
                        WELCOME TO THE CREATIVE WORLD OF IU, A SPECIALIST BOLD ARTIST WITH A PASSION FOR
                        INNOVATION AND STORYTELLING, WITH YEARS OF EXPERIENCE IN ARTS.
                    </p>
                </div>
            </div>
        </div>
    );
}
