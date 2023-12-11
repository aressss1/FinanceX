'use client'

import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import Image from 'next/image';
import { useState } from 'react';

const Testimonials = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        const newStartIndex = Math.min(startIndex + 1, reviews.length - 3);
        setStartIndex(newStartIndex);
    };

    const handlePrev = () => {
        const newStartIndex = Math.max(startIndex - 1, 0);
        setStartIndex(newStartIndex);
    };

    const reviews = [
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
            imgSrc: "client/client-1.svg",
            name: "Ranveer",
            role: "Webflow Developer"
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
            imgSrc: "client/client-2.svg",
            name: "Tony",
            role: "Webflow Developer"
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
            imgSrc: "client/client-3.svg",
            name: "Alex",
            role: "Webflow Developer"
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
            imgSrc: "client/client-3.svg",
            name: "Sammy",
            role: "Webflow Developer"
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
            imgSrc: "client/client-3.svg",
            name: "Alferdo",
            role: "Webflow Developer"
        },
    ]


    return (
        <div className="bg-special py-20" >
            <div className="px-20 pb-14 flex flex-row justify-between items-center " >
                <div className=" flex flex-col gap-5" >
                    <div className="text-neutral-900 text-xl font-semibold ">
                        Our Services
                    </div>
                    <div className=" text-neutral-900 text-7xl font-bold  leading-[4.5rem]">
                        Global businesses <br /> love FinanceX
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5 justify-end' >
                <Button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className='w-14 h-14 rounded-full bg-special border border-black ' >
                    <ArrowLeft className='text-black' />
                </Button>
                <Button
                    onClick={handleNext}
                    disabled={startIndex === reviews.length - 3}
                    className='w-14 h-14 rounded-full bg-black  ' >
                    <ArrowRight className='text-white' />
                </Button>
            </div>
            </div>
            
            <div className='flex items-center justify-center gap-6 '>
                {reviews.slice(startIndex, startIndex + 3).map((review, index) => (
                    <Card key={review.name} className="bg-black w-96 border-none flex flex-col  rounded-none p-10 gap-5 transition-all duration-500 transform hover:scale-105 " >
                        <CardContent className=" text-white text-sm font-normal leading-loose" >
                            {review.review}
                        </CardContent>
                        <CardFooter className="flex flex-row justify-start gap-4 " >
                            <Image
                                className='w-12 h-12  rounded-full'
                                src={review.imgSrc}
                                alt='client'
                            />
                            <div className='flex flex-col gap-2' >
                                <div className="text-white text-sm font-bold ">
                                    {review.name}
                                </div>
                                <div className="text-white text-opacity-70 text-xs font-normal ">
                                    {review.role}
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;