import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="h-[32rem] md:h-[37rem] flex bg-black items-center justify-between" >
            <div className="w-[17rem]  md:w-[38rem] pl-2 flex flex-col lg:pl-20 md:pl-12 gap-3 " >
                <div className="text-special text-xs md:text-xl font-semibold roboto">
                    Welcome! Future Platform
                </div>
                <div >
                    <span className="text-white text-xl lg:text-7xl md:text-5xl font-black roboto ">The World&apos;s Most Modern Card </span><span className="text-special text-xl lg:text-7xl md:text-5xl font-black  roboto">Platform</span>
                </div>
                <div className=" text-white text-opacity-70 text-xs lg:text-lg md:text-base font-normal leading-relaxed rubik ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                </div>
                <Button variant="special" className="roboto" >
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