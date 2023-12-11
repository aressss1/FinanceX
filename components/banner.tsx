import { Button } from "./ui/button";

const Banner = () => {
    return (
        <div className="bg-black px-20 py-12 md:px-12" >
            <div className="bg-special h-96 md:h-64 flex flex-col  items-center justify-center gap-3 " >
                <div className=" text-center text-neutral-900 text-7xl md:text-5xl font-bold  leading-[5rem] md:leading-[4rem]">
                    Let&apos;s grow your business,
                    <br />together.
                </div>
                <Button className="w-56 h-16 px-11 py-5 md:w-40 md:h-12 md:px-8 md:py-4 md:text-xs md:gap-3 bg-black text-special items-center gap-5 inline-flex rounded-none " >
                    Get Started
                </Button>
            </div>
        </div>
    );
}

export default Banner;