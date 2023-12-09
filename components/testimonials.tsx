'use client'

import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const Testimonials = () => {
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
    ]


    return (
        <Swiper
            loop={true}
            modules={[Navigation]}
            slidesPerView={1}
            navigation
        >
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
                        <Button className='w-14 h-14 rounded-full bg-special border border-black ' >
                            <ArrowLeft className='text-black' />
                        </Button>
                        <Button className='w-14 h-14 rounded-full bg-black  ' >
                            <ArrowRight className='text-white' />
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-6 pl-7'>
                    {reviews.map((review) => (
                        <SwiperSlide>
                            <Card key={review.name} className="bg-black border-none flex flex-col  rounded-none p-10 gap-5 " >
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
                        </SwiperSlide>
                    ))}
                </div>
            </div>
        </Swiper>
    );
}

export default Testimonials;