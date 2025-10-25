import aboutMeImage from '../../assets/iu-about-me.png';

export default function AboutMe() {
    return (
        <div className="text-white">
            <h1 className="text-amber-900 font-bold text-[.86rem] px-[.4rem] mt-4">ABOUT ME</h1>
            <div className="grid grid-cols-4 bg-black text-white px-[.4rem] mt-[.7rem]">
                <div className="aspect-square col-start-1">
                    <img src={aboutMeImage} alt="Banner Image 1" className="rounded-2xl w-full h-full object-cover" />
                </div>
                <div className="col-start-2 col-end-5 flex flex-col px-[.4rem] py-[.7rem] text-[.45rem]  gap-3">
                    <p className="">
                        WELCOME TO THE CREATIVE WORLD OF NOATH BENNET, A SPECIALIST BOLD
                        ARTIST WITH A PASSION FOR INNOVATION AND STORY TELLING. WITH YEARS OF
                        EXPERIENCE IN DESIGNS.
                    </p>
                    <p>
                        MY MISSION IS TO BRING IDEAS TO LIFE THROUGH CAPTIVATING VISUALS
                        THAT RESONATE WITH AUDIENCES. LET'S COLLABORATE AND CREATE SOMETHING
                        EXTRAORDINARY TOGETHER.
                    </p>
                </div>
            </div>
        </div>
    );
}
