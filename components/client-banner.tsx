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
            imageSrc: "logos/Vector-Grey.svg",
            name: "Vector"
        },
        {
            imageSrc: "logos/Webflow-Grey.svg",
            name: "Webflow"
        },
    ]
    return (
        <div className="h-48 bg-lime-400" >
            <div className="px-20" >
                <div className="flex flex-row justify-evenly" >
                    {ClientLogos.map((logo) => (
                        <Image
                            key={logo.name}
                            src={logo.imageSrc}
                            alt={logo.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClientBanner;