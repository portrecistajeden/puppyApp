import Link from "next/link";

export default function Nav() {
    return (
        <div className="fixed top-0 w-full bg-emerald-300 h-16">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </div>
    )
}