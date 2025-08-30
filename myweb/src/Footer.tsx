import { icons } from "./svg";
import type { HomeRef } from "./types";

const Footer = ({homeRef}:HomeRef) => {

    const handleNavtoTop =()=>{
        if (homeRef.current){
            homeRef.current.scrollIntoView({ behavior: "smooth" })
        }
        console.log("wew")
    }   
    const year = new Date().getFullYear()
    
    return ( 
        <footer className=" h-40 flex flex-col border bg-mnightblue text-white py-7 text-xs">
            <div className="h-full w-full flex-1 flex flex-col gap-1">
               <div className=" h-1/2 w-full flex justify-center items-center">
                <div className="h-5 aspect-square rotate-270 cursor-pointer" onClick={handleNavtoTop}>{icons.doubleArrow} </div>
                </div>
               <span className=" w-full flex justify-center">BACK TO TOP</span>
            </div>
            <div className="flex-1 flex w-full justify-center items-center ">
        facebook linked in instagram email
            </div>
            <div className="flex-1 flex justify-center items-center ">
                {year} Jeno M. Carisma. All Rights Reserved.
            </div>
        </footer>
     );
}
 
export default Footer;