const AboutMe = () => {
    return (  
        <div className="text-black h-screen pt-[13%] ">
            <div className="mt-10 flex justify-center">
                <span className="border-5 px-5 py-2">A B O U T <span className="pl-2">M E</span></span>
            </div>
            <p className="mt-10 px-5 text-justify">
               <span className="pl-10">My</span>  name is Tomasz Gajda, I'm a third year Applied Computer Science student at the AGH University of Science and Technology in Krakow. I have been learning Front-End technologies for a year and this time was just enough for me to make sure that this is my place in the industry.
Membership in the science club developed my design skills, which quickly turned into a new hobby. I am fluent in English (spoken and written) and intermediate Spanish. Apart from designing and programming websites, my passion is all kinds of motorsport - from rallies to the very king of motorsport - formula 1.
            </p>
            <div className="flex justify-center mt-30 text-2xl">
                <span className="border-x-4 px-10 py-3 cursor-pointer hover:underline decoration-2 hover:text-red-500">EXPLORE</span>
            </div>
        </div>
    );
}
 
export default AboutMe;