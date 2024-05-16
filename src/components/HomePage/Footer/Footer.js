import { TextField } from "@mui/material"
import logo from "../../../assets/img/logo-2-2.png"
import './Footer.css';
import em from "../../../assets/img/envelope_blue.svg"
import tp from "../../../assets/img/phone-alt_blue.svg"
import fb from "../../../assets/img/facebook_blue.svg"
import li from "../../../assets/img/linkedin_blue.svg"
import wp from "../../../assets/img/whatsapp_blue.svg"

const icons=[
    {pic: em},
    {pic: tp},
    {pic: fb},
    {pic: li},
    {pic: wp},
]

export default function FooterandLogo() {
    return(
        <div>
        <footer className="flex justify-center h-auto bg-cover bg-footer bg-blend-exclusion px-7 lg:px-14 xl:px-20 py-8 border-white border-t-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-center lg:justify-evenly xl:gap-20 gap-8 ">
                <div className="flex flex-col justify-center md:justify-start w-64">
                    <img src={logo} alt="logo" className="flex ml-7 md:ml-0 lg:flex-row w-48 md:w-52 lg:w-60"/>
                    <p className="text-white md:text-left text-xs md:text-sm py-2 md:py-5 font-circular-book">It has roots in a piece of classical Latin literature from 45 BC, making it over Lorem Ipsum is nosimply random text.</p>
                    <div className="icons flex justify-center md:justify-stretch gap-4 my-3">
                        {icons.map((item) => (
                            <button className="flex justify-center items-center w-7 h-7 lg:w-9 lg:h-9 bg-white"><a href="#"><img src={item.pic} className="w-3.5 h-3.5" alt="pic"/></a></button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-64 lg:w-60 lg:pl-16 lg:items-start xl:pl-20">
                    <ul className="md:text-left text-md font-ralewaythin font-bold">
                        <li className="pb-3 text-white">Home</li>
                        <li className="pb-3 text-[#6F7799]">About Us</li>
                        <li className="pb-3 text-[#6F7799]">Industry</li>
                        <li className="pb-3 text-[#6F7799]">Government Services</li>
                        <li className="pb-3 text-[#6F7799]">Solutions</li>
                        <li className="pb-3 text-[#6F7799]">Products</li>
                        <li className="pb-3 text-[#6F7799]">Career</li>
                    </ul>
                </div>
                <div className="flex flex-col w-64 justify-center lg:items-start lg:w-52 lg:px-5 ">
                    <ul className="font-ralewaythin font-bold md:text-left">
                        <li className="pb-3 text-white text-2xl">Resources</li>
                        <li className="pb-3 text-[#6F7799] text-md">Our Partners</li>
                        <li className="pb-3 text-[#6F7799] text-md">Our Services</li>
                        <li className="pb-3 text-[#6F7799] text-md">Contact Us</li>
                        <li className="pb-3 text-[#6F7799] text-md">Board of Directors</li>
                        <li className="pb-3 text-[#6F7799] text-md">Privacy Policy</li>
                    </ul></div>
                <div className="flex flex-col justify-center px-8 w-72 md:px-5 lg:w-60  lg:pr-2 md:-ml-5 xl:w-72">
                    <p className="text-white text-2xl font-ralewaythin font-bold text-center md:text-left">Join The List</p>
                    <p className="text-[#6F7799] text-center md:text-left text-sm py-5 font-ralewaythin font-semibold">Join over 5000 VIP members to get weekly updates and special deals on software solutions only available via email.</p>
                    <TextField id="outlined-basic" placeholder="Enter Your E-Mail" variant="outlined" size="small" color="secondary" className="bg-[#3B415C]"/>
                    <div className="flex justify-center md:justify-start md:px-0 py-1 px-2 my-3 text-center ">
                        <button className="text-white w-24 h-8 md:w-20 bg-[#5E9F4B]">Enroll</button>
                    </div>
                </div>
            </div>
        </footer>
        <div className="w-full h-8 md:h-9 bg-[#121D4B] border-t-2 border-[#40465C] flex items-center justify-center">
            <p className="text-[9px] md:text-sm font-circular-book text-[#656F99]">© 2024 All Rights Reserved Terms of Use and Privacy Policy</p>
        </div>
        </div>
    )
}