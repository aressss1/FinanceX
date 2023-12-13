import { MoveRight, Globe, SignalHigh, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const OurServices2 = () => {
    const servicesCardContent = [
        {
            id: 1,
            icon: <MapPin className="h-8 w-8" />,
            title: "Local business finance",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut  "
        },
        {
            id: 2,
            icon: <Globe className="h-8 w-8" />,
            title: "Built for global payments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut  "
        },
        {
            id: 3,
            icon: <SignalHigh className="h-8 w-8" />,
            title: "Make internet of Money",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut  "
        },
    ]

    return (
        <>
            <div className="bg-black  flex flex-col gap-16 px-2 md:flex-row justify-between lg:px-20 py-12 md:px-12 " >
                <div className="flex flex-col gap-5 w-72 md:w-[28rem]  " >
                    <div className="text-special lg:text-xl md:text-base text-xs font-semibold ">
                        Our Services
                    </div>
                    <div>
                        <span className="text-white lg:text-5xl md:text-4xl text-xl font-bold ">Real Time </span><span className="text-special lg:text-5xl md:text-4xl text-xl font-bold ">Transaction Report</span>
                    </div>
                    <div className=" text-white text-opacity-70 md:text-base text-xs font-normal leading-normal ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna
                    </div>
                    <Button variant="special" >
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

            <div className=" bg-black  px-2 lg:px-20 lg:py-12 md:px-12 flex-flex-row overflow-x-auto no-scrollbar md:grid md:grid-cols-3">
                {servicesCardContent.map((card) => (
                    <div key={card.id} className="group" >
                        <Card
                            className=" group-hover:bg-zinc-800 lg:p-6 md:p-4  gap-3 bg-black flex flex-col border border-zinc-800 rounded-none " >
                            <CardHeader className=" flex flex-col gap-3 p-2 md:p-4 lg:p-6" >
                                <div className="lg:h-12 lg:w-12 md:h-9 md:w-9 w-8 h-8 bg-white group-hover:bg-special text-center flex justify-center items-center " >
                                    {card.icon}
                                </div>
                                <div className="text-white lg:text-3xl text-xl  font-bold lg:leading-9 md:leading-7 ">
                                    {card.title}
                                </div>
                            </CardHeader>
                            <CardContent className=" text-white text-opacity-70 p-2 md:p-6 lg:text-base md:text-sm text-xs font-normal leading-normal" >
                                {card.description}
                            </CardContent>
                            <CardFooter className="flex justify-start gap-2 p-2 md:p-6 text-white text-xs md:text-base lg:text-lg" >
                                Learn More
                                <MoveRight className="h-3"  />
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OurServices2;