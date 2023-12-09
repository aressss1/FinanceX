import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <div className="bg-special py-20" >
            <div className="px-20 flex flex-row justify-between items-center " >
                <div className="py-4 flex flex-col gap-2 w-96" >
                    <div className="text-neutral-900 text-xl font-semibold ">
                        Our Services
                    </div>
                    <div className=" text-neutral-900 text-7xl font-bold font-['Satoshi'] leading-10">
                        Global businesses love FinanceX
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
            <div className='flex items-center justify-center'>
                <Card className="bg-black flex flex-col  rounded-none p-10 gap-5 " >
                    <CardContent className=" text-white text-sm font-normal leading-loose" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                    </CardContent>
                    <CardFooter className="flex flex-row justify-start gap-4 " >
                        <Image
                            className='w-12 h-12  rounded-full'
                            src="client/client-1.svg"
                            alt='client'
                        />
                        <div className='flex flex-col gap-2' >
                            <div className="text-white text-sm font-bold ">
                                Ranveer
                            </div>
                            <div className="text-white text-opacity-70 text-xs font-normal ">
                                Webflow Developer
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Testimonials;