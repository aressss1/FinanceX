import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="h-[37rem] flex bg-black items-center justify-between" >
            <div className="w-[38rem] flex flex-col pl-20 gap-5 " >
                <div className="text-lime-400 text-xl font-semibold">
                    Welcome! Future Platform
                </div>
                <div >
                    <span className="text-white text-7xl font-black">The World&apos;s Most Modern Card </span><span className="text-lime-400 text-7xl font-black">Platform</span>
                </div>
                <div className=" text-white text-opacity-70 text-lg font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                </div>
                <Button className="w-56 h-16 px-11 py-5 bg-lime-400 hover:bg-lime-600 text-black items-center gap-5 inline-flex" >
                    Get Started
                    <MoveRight/>
                </Button>
            </div>

            <div>
                <Image 
                    src="hero-right.png"
                    alt="hero-image"
                />
            </div>
        </div>
    );
}

export default HeroSection;