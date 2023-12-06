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
        <div className="h-28 bg-special" >
            <div className="px-20 pt-8 flex flex-row justify-between items-center "  >
                    {ClientLogos.map((logo) => (
                        <div key={logo.name} >
                        <Image
                            src={logo.imageSrc}
                            alt={logo.name}
                        />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ClientBanner;