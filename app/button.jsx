"use client";

export default function Button({text}) {
    return (
        <button onClick={() => console.log('click')} className=" h-12 w-48 text-xl outline outline-2 outline-gray-950 rounded-xl shadow-lg transition ease-in-out hover:bg-white hover:underline m-4">
            {text}
        </button>
    )
}