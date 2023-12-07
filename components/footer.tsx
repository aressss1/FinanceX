import { Linkedin, Instagram, Twitter, } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

const Footer = () => {
    return (
        <div className="bg-black" >
            <div className="px-20 py-12 grid grid-rows-4 gap-3" >
                <div className="flex flex-col gap-4" >
                    <div className="text-white text-xl font-bold">
                        FinanceX
                    </div>
                    <div className="w-52 text-white text-opacity-70 text-base font-normal leading-normal">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className="flex gap-3 justify-center items-center text-white " >
                        <Linkedin className='h-5 w-5' />
                        <Instagram className='h-5 w-5' />
                        <Twitter className='h-5 w-5' />
                    </div>
                </div>

                <div className='flex flex-col gap-4' >
                    <div className="text-white text-opacity-70 text-xl font-bold">
                        Company
                    </div>
                    <div className="text-white flex flex-col gap-4 text-opacity-70 text-base font-normal leading-normal">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4' >
                    <div className="text-white text-opacity-70 text-xl font-bold">
                        Resources
                    </div>
                    <div className="text-white flex flex-col gap-4 text-opacity-70 text-base font-normal leading-normal">
                        <p>Templates</p>
                        <p>Tutorials</p>
                        <p>Free Resources</p>
                        <p>Contract Templates</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4' >
                    <div className="text-white text-opacity-70 text-xl font-bold  leading-normal">
                        Join Our Newsletter
                    </div>
                    <div className="flex w-full max-w-sm items-center">
                        <Input className='rounded-none bg-white bg-opacity-70' type="email" placeholder="Your email address" />
                        <Button className='bg-special rounded-none text-black ' type="submit">Subscribe</Button>
                    </div>
                    <div className="opacity-50 text-white text-opacity-70 text-base font-normal leading-relaxed">
                        *  Will send you weekly updates for your better<br />finance management.
                    </div>
                </div>
            </div>
            <Separator  className='h-[1px] text-white text-opacity-70 '/>
            <div className="text-center text-white text-opacity-70 text-base font-medium ">
                Copyright &copy; FinanceX 2022. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;