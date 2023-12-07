import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const OurServices2 = () => {
    return (
        <div className="bg-black  flex flex-row justify-between px-20 py-12" >
            <div className="flex flex-col gap-7 w-[28rem] py-5 " >
                <div className="text-special text-xl font-semibold ">
                    Our Services
                </div>
                <div>
                    <span className="text-white text-5xl font-bold ">Real Time </span><span className="text-special text-5xl font-bold ">Transaction Report</span>
                </div>
                <div className=" text-white text-opacity-70 text-base font-normal  leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna 
                </div>
                <Button className="w-56 h-16 px-11 py-5 bg-special hover:bg-lime-600 text-black items-center gap-5 inline-flex" >
                    Get Started
                    <MoveRight/>
                </Button>
            </div>
            <div>
                <Image
                    src="/service-right.png"
                    alt="serivces"
                />
            </div>
        </div>
    );
}

export default OurServices2;