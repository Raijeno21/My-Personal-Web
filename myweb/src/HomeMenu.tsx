import type { HomeRef } from "./types";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import TechStack from "./TechStack";

const HomeNav = ({homeRef}:HomeRef) => {

    const menu = ["About Me","Skills","TechStack","Portfolio","Contact Me"]
    return ( 
        <main className="overflow-y-hidden">
        <nav className="h-screen w-full relative" ref={homeRef}>
            <img src ="/images/dev_background.avif" className="object-left h-full w-full"/>
            <div className="w-full absolute top-[8%] bg-gray-200/20">
                    <div className="text-white flex flex-col">
                        {menu.map((nav,i)=>(
                            <a key={i} href={`#${nav}`} className="p-2 cursor-pointer w-full flex justify-center hover:bg-white hover:text-black">
                                    {nav}
                            </a>
                        ))}
                    </div>
            </div>
            <div className="absolute bottom-20 w-full text-white flex flex-col items-center text-sm">
                            <div>My name is <span className="text-xl pl-2">JENO</span></div>
                            <div>I'm a <span className=" text-xl pl-2">DEVELOPER</span></div>
            </div>
        </nav>
        <div className="w-full">
            <section id="About Me"><AboutMe/></section>
            <section id="Skills"><Skills/></section>
            <section id="TechStack"><TechStack/></section>
            <section id="Portfolio"><Portfolio/></section>
            <section id="Contact Me"><ContactMe/></section>
            
        </div>
        </main>
     );
}
 
export default HomeNav;