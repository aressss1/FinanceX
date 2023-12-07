import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Minus, MoveUpRight } from 'lucide-react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"



const OurServices1 = () => {
    const servicesCardContent = [
        {
            id: 1,
            title: "Checking accounts",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam eaque! Nihil mollitia tempore laborum harum cum doloribus eligendi itaque ad quisquam, et expedita libero vitae consectetur? Mollitia, illo natus."
        },
        {
            id: 2,
            title: "Checking accounts",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam eaque! Nihil mollitia tempore laborum harum cum doloribus eligendi itaque ad quisquam, et expedita libero vitae consectetur? Mollitia, illo natus."
        },
        {
            id: 3,
            title: "Checking accounts",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam eaque! Nihil mollitia tempore laborum harum cum doloribus eligendi itaque ad quisquam, et expedita libero vitae consectetur? Mollitia, illo natus."
        },
        {
            id: 4,
            title: "Checking accounts",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam eaque! Nihil mollitia tempore laborum harum cum doloribus eligendi itaque ad quisquam, et expedita libero vitae consectetur? Mollitia, illo natus."
        },
        {
            id: 5,
            title: "Checking accounts",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam eaque! Nihil mollitia tempore laborum harum cum doloribus eligendi itaque ad quisquam, et expedita libero vitae consectetur? Mollitia, illo natus."
        },
    ]

    return (
        <div className="px-20 py-20 bg-black grid grid-cols-3  ">
            <div className="flex flex-col gap-6 " >
                <div className="text-special text-xl font-semibold ">
                    Our Services
                </div>
                <div>
                    <span className="text-white text-5xl font-bold ">Browse our services & </span><span className="text-special text-5xl font-bold">offerings</span></div>
                <Button className="w-56 h-16 px-11 py-5 rounded-none bg-special hover:bg-lime-600 text-black items-center gap-5 inline-flex" >
                    Get Started
                    <MoveRight />
                </Button>
            </div>
            {servicesCardContent.map((card) => (
                <div key={card.id}  className="group" >
                    <Card
                        className=" group-hover:bg-zinc-800  px-6 py-5 bg-black flex flex-col border border-zinc-800 rounded-none " >
                        <CardHeader className=" flex flex-col gap-4"  >
                            <Minus className=" text-white " />
                            <div className="w-64 text-white text-2xl font-medium ">
                                {card.title}
                            </div>
                        </CardHeader>
                        <CardContent className=" py-5 text-white text-opacity-70 text-base font-normal leading-normal" >
                            {card.description}
                        </CardContent>
                        <CardFooter className=" flex pt-3 justify-end" >
                            <Button className="w-14 h-14 bg-white rounded-none group-hover:bg-special " >
                                <MoveUpRight className="text-black" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            ))}


        </div>
    );
}

export default OurServices1;