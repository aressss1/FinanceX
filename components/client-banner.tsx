import Image from "next/image";

const ClientBanner = () => {   
    const ClientLogos = [
        {
            imageSrc: "logos/Adobe-Grey.svg",
            name:"Adobe"
        },
        {
            imageSrc: "logos/Google-Grey.svg",
            name:"Google"
        },
        {
            imageSrc: "logos/Paypal-Grey.svg",
            name:"Paypal"
        },
        {
            imageSrc: "logos/Vector-Grey.svg",
            name:"Vector"
        },
        {
            imageSrc: "logos/Webflow-Grey.svg",
            name:"Webflow"
        },
    ]
    return ( 
        <div className="h-56 bg-lime-400" >
            <div className="px-20" >
                {ClientLogos.map((logo) => (
                    <div key={logo.name} className="flex flex-row justify-evenly" >
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