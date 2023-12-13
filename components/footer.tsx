import { Linkedin, Instagram, Twitter, } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

const Footer = () => {
    return (
        <div className="bg-black" >
            <div className="lg:px-20 py-14 md:px-12 px-2 grid grid-cols-2 md:grid-cols-4 gap-12" >
                <div className="flex flex-col lg:gap-4 gap-3 " >
                    <div className="text-white lg:text-xl md:text-base text-sm font-bold">
                        FinanceX
                    </div>
                    <div className="lg:w-52 md:w-40 text-white text-opacity-70 lg:text-base md:text-sm text-xs font-normal leading-normal">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className="flex gap-5 justify-start items-center text-white " >
                        <Linkedin className='lg:h-5 lg:w-5 h-4 w-4' />
                        <Instagram className='lg:h-5 lg:w-5 h-4 w-4 ' />
                        <Twitter className='lg:h-5 lg:w-5 h-4 w-4 ' />
                    </div>
                </div>

                <div className='flex flex-col lg:gap-4 gap-3' >
                    <div className="text-white text-opacity-70 lg:text-xl md:text-base text-sm font-bold">
                        Company
                    </div>
                    <div className="text-white flex flex-col gap-4 text-opacity-70 lg:text-base md:text-sm text-sm font-normal leading-normal">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                    </div>
                </div>

                <div className='flex flex-col lg:gap-4 gap-3' >
                    <div className="text-white text-opacity-70 lg:text-xl md:text-base text-sm font-bold">
                        Resources
                    </div>
                    <div className="text-white flex flex-col gap-4 text-opacity-70 lg:text-base md:text-sm text-sm font-normal leading-normal">
                        <p>Templates</p>
                        <p>Tutorials</p>
                        <p>Free Resources</p>
                        <p>Contract Templates</p>
                    </div>
                </div>

                <div className='flex flex-col lg:gap-4 gap-3 col-span-2 md:col-span-1' >
                    <div className="text-white text-opacity-70 lg:text-xl md:text-base text-sm font-bold  leading-normal">
                        Join Our Newsletter
                    </div>
                    <div className="flex w-full max-w-sm items-center">
                        <Input className='rounded-none bg-white bg-opacity-70 text-xs lg:text-sm' type="email" placeholder="Your email address" />
                        <Button className='bg-special rounded-none text-black lg:w-20 md:w-16 md:text-xs md:px-2 md:py-1 ' type="submit">Subscribe</Button>
                    </div>
                    <div className="opacity-50 text-white text-opacity-70 lg:text-base md:text-sm text-xs font-normal leading-relaxed">
                        *  Will send you weekly updates for your better finance management.
                    </div>
                </div>
            </div>
            <Separator  className=' text-white text-opacity-70 '/>
            <div className="p-3 text-center text-white text-opacity-70 md:text-base text-xs  font-medium ">
                Copyright &copy; FinanceX 2022. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;