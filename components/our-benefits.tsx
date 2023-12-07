import { DollarSign, Plus } from 'lucide-react';
import Image from 'next/image';


const OurBenefits = () => {
    return ( 
        <div className="flex flex-row px-20 py-12 bg-black" >
            <div className="flex flex-col gap-8" >
            <div className="text-special text-xl font-semibold">
                Benefits
            </div>
            <div>
                <span className="text-white text-5xl font-bold leading-10">We have many users all over the </span><span className="text-special text-5xl font-bold leading-10">world</span>
            </div>
            <div className=" text-white text-opacity-70 text-base font-normal leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna 
            </div>
            <div className='flex flex-row justify-between' >
                <div className='flex flex-col justify-between' >
                    <div className='flex flex-row text-3xl text-white uppercase ' >
                        10M
                        <Plus className='text-special'  />
                    </div>
                    <div className="text-special text-sm font-normal leading-none">
                        User active
                    </div>
                </div>
                <div className='flex flex-col justify-between' >
                    <div className='flex flex-row text-3xl text-white uppercase ' >
                        30
                        <Plus className='text-special'  />
                    </div>
                    <div className="text-special text-sm font-normal leading-none">
                        Country
                    </div>
                </div>
                <div className='flex flex-col justify-between' >
                    <div className='flex flex-row text-3xl text-white uppercase ' >
                        <DollarSign />
                        50M
                        <Plus className='text-special'  />
                    </div>
                    <div className="text-special text-sm font-normal leading-none">
                        Transactions
                    </div>
                </div>
            </div>
            </div>
            <div>
                <Image 
                    src="/map.png"
                    alt='map'
                />
            </div>
        </div>
     );
}
 
export default OurBenefits;