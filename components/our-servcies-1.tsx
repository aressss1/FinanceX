import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Minus , MoveUpRight } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const OurServices1 = () => {
    return (
        <div className="px-20 py-20 bg-black grid grid-cols-2 ">
            <div className=" flex flex-col gap-6" >
                <div className="text-special text-xl font-semibold ">
                    Our Services
                </div>
                <div className="w-96">
                    <span className="text-white text-5xl font-bold ">Browse our services & </span><span className="text-special text-5xl font-bold">offerings</span></div>
                <Button className="w-56 h-16 px-11 py-5 bg-special hover:bg-lime-600 text-black items-center gap-5 inline-flex" >
                    Get Started
                    <MoveRight />
                </Button>
            </div>
            <Card className="px-6 py-9 bg-black flex flex-col border border-zinc-800" >
                <CardHeader className="flex flex-col gap-4"  >
                    <Minus className="w-10 text-white " />
                    <div className="w-64 text-white text-2xl font-medium ">
                        Checking accounts
                    </div>
                </CardHeader>
                <CardContent className="py-7 text-white text-opacity-70 text-base font-normal leading-normal" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam eaque! Nihil mollitia tempore laborum harum cum doloribus eligendi itaque ad quisquam, et expedita libero vitae consectetur? Mollitia, illo natus.
                </CardContent>
                <CardFooter className="flex justify-end" >
                    <Button className="w-14 h-14 bg-white " >
                        <MoveUpRight className="text-black"  />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default OurServices1;