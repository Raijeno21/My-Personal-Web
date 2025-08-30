const TechStack = () => {
    const logos = [
        {name:"TypeScript",logo:"/images/ts.png"},
        {name:"HTML 5",logo:"/images/html.png"},
        {name:"CSS",logo:"/images/css.png"},
        {name:"Tailwind CSS",logo:"/images/tailwind.png"},
        {name:"Node JS",logo:"/images/node.png"},
        {name:"Mongo DB",logo:"/images/mongo.png"},
        {name:"Postgre SQL",logo:"/images/postgre.png"}, 
        {name:"Next JS", logo:"/images/next.png"}
    ]
    return (  
        <div className="h-screen pt-[13%]">
            <div className=" h-full flex flex-col">
                <div className="w-full flex justify-center mt-10 ">
                    <span className="px-5 py-2 border-5">S K I L L S</span>
                    </div>
                <div className="h-full grid grid-cols-2 px-5 ">
                  {logos.map((logo,i)=>(
                        <div key={i} className="flex justify-center items-center flex-col gap-2">
                            <div>
                                <img src={logo.logo}/>
                            </div>
                            <div className="text-xl">
                               {logo.name} 
                            </div>
                            
                        </div>
                  ))

                  }
                </div>
            </div>
        
        </div>
    );
}
 
export default TechStack;