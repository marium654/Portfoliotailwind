import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { PiUserSoundBold } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { MdPhotoCamera } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

function Services(){
return(
    <main className="main">
        <div className="ser-container">
         {/* top div */}
         <div className="top-div-ser">
            <h2 className="title-ser">My Services</h2>
            <p className="des-ser">I offer custom front-end development services to create responsive, 
                user-friendly websites that deliver exceptional user experiences across all devices</p>
         </div>
          {/* bottom div */}
        <div className="boxes-con">
        <div className="box">
           <FaLaptopCode className="ser-icon"/>
           <h3>Web Development</h3>
           <span>Blog, E-Commerce</span>
        </div>
        <div className="box">
           <CgWebsite className="ser-icon"/>
           <h3>UI/UX Design</h3>
           <span>Mobile App, Website Design</span>
        </div>
        <div className="box">
           <PiUserSoundBold className="ser-icon"/>
           <h3>Sound Design</h3>
           <span>Voice Over,Beat Making</span>
        </div>
        <div className="box">
           <IoGameController className="ser-icon"/>
           <h3>Game Design</h3>
           <span>Character Design,Props and Objects</span>
        </div>
        <div className="box">
           <MdPhotoCamera className="ser-icon"/>
           <h3>Photography</h3>
           <span>Portrait,Product Photography</span>
        </div>
        <div className="box">
           < RiAdvertisementFill className="ser-icon"/>
           <h3>Advertising</h3>
           <span>Creative Advertising</span>
        </div>
        </div>
     </div>
    </main>
)
}
export default Services;