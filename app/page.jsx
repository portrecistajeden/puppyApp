import Image from "next/image";
import dogPic from '../public/dogo.png'
import Button from "./button";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-br from-emerald-50 to-pink-200">
        <div className="absolute bottom-1/2 left-16 w-2/3 max-w-[1200px]">
            <h1 className="">Keep track of 
                <span className="text-emerald-500 font-bold"> your
                </span>
                Pets veterinary visits, diet and more with
                <span className="">
                    <span className="text-pink-300 font-bold"> my
                    </span>
                    Pets
                </span>
            </h1>
            <h3 className="">
            Aliquam commodo justo luctus purus sagittis, ut scelerisque arcu commodo. Etiam placerat erat accumsan libero varius, et rhoncus risus luctus. Fusce metus mi, malesuada sit amet eleifend vel, posuere in est. In volutpat sem ac eros vehicula convallis.
            </h3>
            <div className="mt-8">
                <Button text={'Sign in'} bgHoverColor={'bg-pink-300'}/>
                <Button text={'Create account'} bgHoverColor={'bg-emerald-300'}/>
            </div>
        </div>
        
        <Image 
            className="absolute bottom-0 right-0 contrast-75"
            src={dogPic} 
            width={'50vh'}
            height={'50vh'}
            alt="dog"/>

    </main>
  )
}
