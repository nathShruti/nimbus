import { TextField } from "@mui/material"
import logo from "../../../assets/img/logo-2-2.png"
import './Footer.css';
import em from "../../../assets/img/envelope_blue.svg"
import tp from "../../../assets/img/phone-alt_blue.svg"
import fb from "../../../assets/img/facebook_blue.svg"
import li from "../../../assets/img/linkedin_blue.svg"
import wp from "../../../assets/img/whatsapp_blue.svg"

export default function FooterandLogo() {
    return(
        <div>
        <footer className="h-72 bg-footer bg-blend-exclusion px-20 py-8 border-white border-t-2">
            <div className="grid grid-cols-4 items-start justify-evenly gap-8">
                <div className="flex flex-col w-64">
                    <img src={logo} alt="logo" className="flex flex-row w-60"/>
                    <p className="text-white text-left text-sm py-5 font-circular-book">It has roots in a piece of classical Latin literature from 45 BC, making it over Lorem Ipsum is nosimply random text.</p>
                    <div className="icons flex justify-stretch gap-4 my-3">
                        <button className="flex justify-center items-center w-9 h-9 bg-white"><a href="#"><img src={em} alt="pic"/></a></button>
                        <button className="flex justify-center items-center w-9 h-9 bg-white"><a href="#"><img src={tp} alt="pic"/></a></button>
                        <button className="flex justify-center items-center w-9 h-9 bg-white"><a href="#"><img src={fb} alt="pic"/></a></button>
                        <button className="flex justify-center items-center w-9 h-9 bg-white"><a href="#"><img src={li} alt="pic"/></a></button>
                        <button className="flex justify-center items-center w-9 h-9 bg-white"><a href="#"><img src={wp} alt="pic"/></a></button>
                    </div>
                </div>
                <div className="flex flex-col w-60 pl-20">
                    <ul className="text-md text-left font-ralewaythin font-bold">
                        <li className="pb-3 text-white">Home</li>
                        <li className="pb-3 text-[#6F7799]">About Us</li>
                        <li className="pb-3 text-[#6F7799]">Industry</li>
                        <li className="pb-3 text-[#6F7799]">Government Services</li>
                        <li className="pb-3 text-[#6F7799]">Solutions</li>
                        <li className="pb-3 text-[#6F7799]">Products</li>
                        <li className="pb-3 text-[#6F7799]">Career</li>
                    </ul>
                </div>
                <div className="flex flex-col w-52 px-5">
                    <ul className="font-ralewaythin font-bold text-left">
                        <li className="pb-3 text-white text-2xl">Resources</li>
                        <li className="pb-3 text-[#6F7799] text-md">Our Partners</li>
                        <li className="pb-3 text-[#6F7799] text-md">Our Services</li>
                        <li className="pb-3 text-[#6F7799] text-md">Contact Us</li>
                        <li className="pb-3 text-[#6F7799] text-md">Board of Directors</li>
                        <li className="pb-3 text-[#6F7799] text-md">Privacy Policy</li>
                    </ul></div>
                <div className="flex flex-col w-70 -ml-5">
                    <p className="text-white text-2xl font-ralewaythin font-bold text-left">Join The List</p>
                    <p className="text-[#6F7799] text-left text-sm py-5 font-ralewaythin font-semibold">Join over 5000 VIP members to get weekly updates and special deals on software solutions only available via email.</p>
                    <TextField id="outlined-basic" placeholder="Enter Your E-Mail" variant="outlined" size="small" color="secondary" className="bg-[#3B415C]"/>
                    <div className="w-20 py-1 px-2 my-3 bg-[#5E9F4B]">
                        <button className="text-white">Enroll</button>
                    </div>
                </div>
            </div>
        </footer>
        <div className="w-full h-9 bg-[#121D4B] border-t-2 border-[#40465C] flex items-center justify-center">
            <p className="text-sm font-circular-book text-[#656F99]">© 2024 All Rights Reserved Terms of Use and Privacy Policy</p>
        </div>
        </div>
    )
}