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
            <div className="bg-black  flex flex-row justify-between px-20 py-12 md:px-12 " >
                <div className="flex flex-col gap-5 w-[28rem]  " >
                    <div className="text-special text-xl md:text-base font-semibold ">
                        Our Services
                    </div>
                    <div>
                        <span className="text-white text-5xl md:text-4xl font-bold ">Real Time </span><span className="text-special text-5xl md:text-4xl font-bold ">Transaction Report</span>
                    </div>
                    <div className=" text-white text-opacity-70 text-base font-normal leading-normal md:p-4 md:w-56 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna
                    </div>
                    <Button className="w-56 h-16 md:w-40 md:h-12 px-11 py-5 md:px-8 md:py-4 md:text-xs md:gap-3  bg-special rounded-none hover:bg-lime-600 text-black items-center gap-5 inline-flex" >
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

            <div className=" bg-black px-20 py-12 md:px-12 grid grid-cols-3">
                {servicesCardContent.map((card) => (
                    <div key={card.id} className="group" >
                        <Card
                            className=" group-hover:bg-zinc-800 p-6 md:p-4 gap-3 bg-black flex flex-col border border-zinc-800 rounded-none " >
                            <CardHeader className=" flex flex-col gap-3 md:p-4" >
                                <div className="h-12 w-12 md:h-9 md:w-9 bg-white group-hover:bg-special text-center flex justify-center items-center " >
                                    {card.icon}
                                </div>
                                <div className="text-white text-3xl md:text-xl font-bold leading-9 md:leading-7 ">
                                    {card.title}
                                </div>
                            </CardHeader>
                            <CardContent className=" text-white text-opacity-70 text-base md:text-sm font-normal leading-normal" >
                                {card.description}
                            </CardContent>
                            <CardFooter className="flex justify-start gap-2 text-white md:text-base " >
                                Learn More
                                <MoveRight className="md:h-3"  />
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OurServices2;