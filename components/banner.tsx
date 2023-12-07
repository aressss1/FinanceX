import { Button } from "./ui/button";

const Banner = () => {
    return (
        <div className="bg-black px-20 py-12" >
            <div className="bg-special flex flex-row items-center justify-center gap-3 " >
                <div className=" text-center text-neutral-900 text-7xl font-bold  leading-10">
                    Let&apos;s grow your business,
                    <br />together.
                </div>
                <Button className="w-56 h-16 px-11 py-5 bg-black text-special items-center gap-5 inline-flex" >
                    Get Started
                </Button>
            </div>
        </div>
    );
}

export default Banner;