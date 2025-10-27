import { Button } from "../ui/button";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center px-3 mt-4 mb-3 text-white">
            <div className="font-bold italic">N. S.</div>
            <div className="flex gap-3 text-[.45rem] items-center">
                <p>HOME</p>
                <p>ABOUT</p>
                <p>PROJECTS</p>
                <p>BLOG</p>
            </div>
            <Button variant={"default"} className="bg-amber-900 font-light text-[.4rem] rounded-none rounded-tl-[3px] rounded-br-[3px] h-auto">CONTACT</Button>
        </div>
    )
}
