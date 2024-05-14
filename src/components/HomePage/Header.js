import Fb from "../../assets/img/facebook.svg";
import In from "../../assets/img/linkedin.svg";
import Wp from "../../assets/img/whatsapp.svg";
import Em from "../../assets/img/email.svg";
import tele from "../../assets/img/telephone.svg";

export default function Header() {
  return (
    <div className="relative md:flex md:items-center md:justify-between md:px-14 lg:flex lg:items-center lg:justify-between bg-[#121D4B] lg:px-28">
      <div className="block md:flex md:flex-1 md:gap-8 md:p-0 lg:flex lg:flex-1 p-2 lg:gap-20">
        <div className="flex p-2 gap-1 lg:gap-3">
            <div className="w-6 h-6 bg-[#5E9F4B] rounded-full flex items-center justify-center">
                <img src={Em} alt="E-mail" /> 
            </div>
            <p className="p-0.5 text-md text-white text-sm font-ralewaythin font-semibold lg:text-md xl:text-md">xyz.abc@nimbussystems.com</p>
        </div>
        <div className="flex p-2 gap-1 lg:gap-3">
            <div className="w-6 h-6 bg-[#5E9F4B] rounded-full flex items-center justify-center">
                <img src={tele} alt="telephone" />
            </div>
            <p className="p-0.5 text-md text-white text-sm font-gentium lg:text-md">+91 1234567890</p>
        </div>
      </div>
      <div className=" hidden md:flex md:h-10 lg:flex w-40 h-9 items-center justify-evenly bg-white">
        <div className="w-6 h-6 bg-[#5E9F4B] flex items-center justify-center">
            <img src={Fb} alt="fb"/>
        </div>
        <div className="w-6 h-6 bg-[#5E9F4B] flex items-center justify-center">
            <img src={In} alt="linkedin"/>
        </div>
        <div className="w-6 h-6 bg-[#5E9F4B] flex items-center justify-center">
            <img src={Wp} alt="whatsapp"/>
        </div>
      </div>
    </div>
  )
}
