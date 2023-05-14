import Link from "next/link";

export default function NavLink({target, text}) {
    return (
        <Link className='mx-4 text-lg hover:text-emerald-500 transition duration-300' href={target}>{text}</Link>

    )
}