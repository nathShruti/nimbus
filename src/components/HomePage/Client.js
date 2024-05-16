import Marquee from "react-fast-marquee";
import c1 from "../../assets/img/jewllwry-and-gems-clients-2.jpg";
import c2 from "../../assets/img/jewllwry-and-gems-clients-3.jpg";
import c3 from "../../assets/img/jewllwry-and-gems-clients-5.jpg";
import c4 from "../../assets/img/jewllwry-and-gems-clients-7.jpg";
import c5 from "../../assets/img/jewllwry-and-gems-clients-10.jpg";
import c6 from "../../assets/img/jewllwry-and-gems-clients-11.jpg";

const clientLogo = [
    {logo: c1},
    {logo: c2},
    {logo: c3},
    {logo: c4},
    {logo: c5},
    {logo: c6},
]

export default function Clients() {
    return(
        <section className="h-auto bg-cover bg-clientbg py-10">
            <div>
                <p className="text-3xl md:text-4xl mb-7 text-center font-circular-medium text-[#ffffff]">Our Clients</p>
            </div>
            <div className="py-2 md:py-7">
                <Marquee>
                    {clientLogo.map((item) => (
                        <img src={item.logo} alt="client" className="mx-5"/>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}