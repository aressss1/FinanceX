import { Button } from "./ui/button";

const Banner = () => {
    return (
        <div className="bg-black px-20  py-12" >
            <div className="bg-special h-96 flex flex-col  items-center justify-center gap-3 " >
                <div className=" text-center text-neutral-900 text-7xl font-bold  leading-[5rem]">
                    Let&apos;s grow your business,
                    <br />together.
                </div>
                <Button className="w-56 h-16 px-11 py-5 bg-black text-special items-center gap-5 inline-flex rounded-none " >
                    Get Started
                </Button>
            </div>
        </div>
    );
}

export default Banner;