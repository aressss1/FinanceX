import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="h-[37rem] flex bg-black items-center justify-between" >
            <div className="w-72  md:w-[38rem] pl-2 flex flex-col lg:pl-20 md:pl-12 gap-5  " >
                <div className="text-special text-xs md:text-xl font-semibold">
                    Welcome! Future Platform
                </div>
                <div >
                    <span className="text-white text-xl lg:text-7xl md:text-5xl font-black">The World&apos;s Most Modern Card </span><span className="text-special text-xl lg:text-7xl md:text-5xl font-black">Platform</span>
                </div>
                <div className=" text-white text-opacity-70 text-xs lg:text-lg md:text-base font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                </div>
                <Button className=" w-28 px-5 lg:w-56 lg:h-16 md:w-40 md:h-12 lg:px-11 lg:py-5  md:px-8 md:py-4 md:text-xs md:gap-3  lg:text-sm  bg-special rounded-none hover:bg-lime-600 text-black items-center lg:gap-5 inline-flex" >
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