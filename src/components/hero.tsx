import Image from "next/image";
import "../style/hero.css";


function Hero(){
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
                 </div>
                  {/* right side */}
                  <div className="hero-right-div">
                    <h1 className="title-hero">I'm Marium Anwar
                        Front-end Developer</h1>
                        <p className="des-hero">A dedicated front-end developer and eager student, 
                         I combine creativity and technical skills to craft seamless user experiences.
                         Always exploring new tools and techniques to improve my craft and stay ahead in the fast-paced tech world.</p>
                         <button className="hero-btn"> HIRE ME </button>
                  </div>
              </div>
        </div>
    )
}
export default Hero