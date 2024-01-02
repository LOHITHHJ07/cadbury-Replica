import logo from "../assets/Mondelez_Logo_White.svg"
import fb from "../assets/Social_Facebook.svg";
import insta from "../assets/Social_Instagram.svg";
import tittok from "../assets/Social_Tiktok.svg";

import "../Styles/Contact.css"


interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    return (

        <div className="">
             <div className="filling flex flex-row  justify-center lg:justify-end  px-auto lg:px-36">
           <div> <img src="https://images.ctfassets.net/pmzhtobns06n/FylNgIq5k8uYLgdPsRNC3/2d5134c6f611132106fcd3229a9f416e/Cadbury_MilkPourMaster.png?fm=webp&q=80&fm=webp&q=80" className=" h-56 lg:h-72  " alt="" /></div>
        </div>
        <div className="  py-10 flex  flex-col lg:flex-row justify-center items-center lg:justify-between  px-4  lg:px-36">
            <img src={logo} alt="" className="cursor-pointer  h-36  lg:h-auto"  />
            <div className="flex flex-row items-center justify-center  gap-x-10">
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={tittok} alt="" />
            </div>
        </div>
        <div className="contact flex flex-col-reverse justify-start lg:flex-row lg:justify-between  py-8 border-t-2 mx-4 lg:mx-36">
            <h1 className="" >© 2024 Mondelez United Kingdom</h1>
            <ul className=" grid grid-cols-2 gap-y-6 lg:gap-y-0  mb-6 lg:mb-0 lg:flex lg:flex-row justify-center items-center gap-x-9 ">
                <li> <a href="">TERMS OF USE</a></li>
                <li><a href="">PRIVACY NOTICE</a></li>
                <li><a href="">COOKIE NOTICE</a></li>
                <li><a href="">ACCESSIBILITY</a></li>
                <li><a href="">T&Cs</a></li>
                <li><a href="">CONTACT US</a></li>
            </ul>
        </div>
        </div>
       
    )
}

export default Contact