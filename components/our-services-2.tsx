import { MoveRight, Globe, Signal, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const OurServices2 = () => {
    return (
        <>
            <div className="bg-black  flex flex-row justify-between px-20 py-12" >
                <div className="flex flex-col gap-5 w-[28rem]  " >
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
                        <MoveRight />
                    </Button>
                </div>
                <div>
                    <Image
                        src="/service-right.png"
                        alt="serivces"
                    />
                </div>
            </div>

            <div className=" bg-black px-20 py-12 group" >
                <Card
                    className=" group-hover:bg-zinc-800 p-6 gap-3 bg-black flex flex-col border border-zinc-800 rounded-none " >
                    <CardHeader className=" flex flex-col gap-3" >
                        <div className="h-12 w-12 bg-white group-hover:bg-special text-center flex justify-center items-center " >
                            <MapPin className="h-8 w-8" />
                        </div>
                        <div className="text-white text-3xl font-bold leading-9">
                            Local business finance
                        </div>
                    </CardHeader>
                    <CardContent className=" text-white text-opacity-70 text-base font-normal leading-normal" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardContent>
                    <CardFooter className="flex justify-start text-white " >
                        Learn More
                        <MoveRight />
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default OurServices2;