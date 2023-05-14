"use client";

export default function Button({text, bgHoverColor}) {
    return (
        <button onClick={() => console.log('click')} className={` hover:bg-emerald-500 h-12 w-48 text-xl outline outline-2 outline-gray-950 rounded-xl shadow-lg transition m-4`}>
            {text}
        </button>
    )
}