import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About(){
    return(

        <div className="header-conatainer">
               <div className="header-boxes-con">
                 {/* left side */}
                 <div>
                 <Image src={"/images/marium.jfif"} 
                 width={200}
                 height={200}
                 className="header-image"
                 alt="Profile"/>
                 <div className="social-icon">
                 <Link href={""}> <FaYoutube className="s-icon1"/></Link>
                 <Link href={""}> <FaFacebook className="s-icon2"/></Link>
                 <Link href={""}> <FaInstagram  className="s-icon3"/></Link>
               </div>
                 </div>
                  {/* right side */}
                  <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                        <p className="des-hero">Hi, I'm,a passionate front-end developer with a strong focus on crafting beautiful,
                        responsive websites. With a solid foundation in HTML, CSS, and JavaScript, I specialize in creating user-centered
                    designs that deliver seamless experiences across all devices. I believe in the power of clean, efficient code and aim
                    to make every project both functional and visually compelling. As a lifelong learner, I continuously explore new tools
                     and technologies to stay ahead of industry trends. My goal is to help turn ideas into interactive, user-friendly web solutions that make a lasting impact.</p>
                  </div>
              </div>
        </div>
    )
}
export default About