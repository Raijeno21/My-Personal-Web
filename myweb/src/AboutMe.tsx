const AboutMe = () => {
  return (
    <div className="h-screen text-black pt-[20%]">
      <div className="flex flex-col h-full justify-between">
        <div className="justify-center flex ">
        <span className="border-5 px-5 py-2 flex">
          A B O U T <span className="pl-2">ME</span>
        </span>
      </div>
      <div className="flex-1 pt-10">
           <p className="text-justify px-5">
        <span className="pl-10">My</span> name is Tomasz Gajda, I'm a third year
        Applied Computer Science student at the AGH University of Science and
        Technology in Krakow. I have been learning Front-End technologies for a
        year and this time was just enough for me to make sure that this is my
        place in the industry. Membership in the science club developed my
        design skills, which quickly turned into a new hobby. I am fluent in
        English (spoken and written) and intermediate Spanish. Apart from
        designing and programming websites, my passion is all kinds of
        motorsport - from rallies to the very king of motorsport - formula 1.
         </p>
      </div>
      <div className="flex text-2xl justify-center mb-15" >
        <span className=" border-x-5 px-15">
           EXPLORE
        </span>
         
      </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
