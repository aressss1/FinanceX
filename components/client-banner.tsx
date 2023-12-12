import Image from "next/image";

const ClientBanner = () => {
    const ClientLogos = [
        {
            imageSrc: "logos/Adobe-Grey.svg",
            name: "Adobe"
        },
        {
            imageSrc: "logos/Google-Grey.svg",
            name: "Google"
        },
        {
            imageSrc: "logos/Paypal-Grey.svg",
            name: "Paypal"
        },
        {
            imageSrc: "logos/Vector.svg",
            name: "Vector"
        },
        {
            imageSrc: "logos/Webflow-Grey.svg",
            name: "Webflow"
        },
    ]
    return (
        <div className=" h-24 md:h-28 bg-special" >
            <div className=" px-2 lg:px-20 md:px-12 pt-7 md:pt-8 flex flex-row justify-between items-center "  >
                    {ClientLogos.map((logo) => (
                        <div key={logo.name} >
                        <Image
                            src={logo.imageSrc}
                            alt={logo.name}
                            className="h-10 w-12 md:w-[83px] md:h-[46px] lg:w-auto lg:h-auto"
                        />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ClientBanner;