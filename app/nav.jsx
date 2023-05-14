import Link from "next/link";
import NavLink from "./navLink";

export default function Nav() {
    return (
        <div className="fixed top-0 w-full bg-transparent h-16 flex flex-row items-center justify-between px-4">
            <Link className="text-4xl font-bold hover:text-pink-300 transition duration-300" href='/'><span className="text-pink-300">my</span>Pets</Link>
            <div className="flex flex-row items-center justify-end">
                <NavLink target={'/about'} text={'About'}/>
                <NavLink target={'/#'} text={'Placeholder'}/>
                <NavLink target={'/#'} text={'Placeholder'}/>
            </div>
        </div>
    )
}