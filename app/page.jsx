import Button from "./button";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-br from-emerald-50 to-pink-200 flex justify-center items-center">
        <div className="flex flex-row p-8">
            <div className="pr-6 flex flex-col items-center border-r-4 border-gray-950">
                <input type="text" placeholder='login' className="text-xl outline-0 w-72 h-8 m-4 border-b-4 rounded border-gray-950 bg-transparent"/>
                <input type="text" placeholder='password' className="text-xl outline-0 w-72 h-8 m-4 border-b-4 rounded border-gray-950 bg-transparent"/>
                <Button text={'Log in'}/>
                <Button text={'Create account'}/>
            </div>
            <div className="m-6">
                <h1 className="text-6xl">Why use Appy?</h1>
                <ul className="list-disc pl-8 ">
                    <li className="text-3xl m-6">
                        Reason
                    </li>
                    <li className="text-3xl m-6">
                        second reason
                    </li>
                    <li className="text-3xl m-6">
                        third reason
                    </li>
                </ul>
            </div>
        </div>
    </main>
  )
}
