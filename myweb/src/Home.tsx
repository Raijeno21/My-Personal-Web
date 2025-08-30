import {icons} from './svg.tsx'
const Home = () => {

    return ( 
        <nav className="h-screen w-screen sm:bg-mnightblue relative z-0">
           
            <div className="flex justify-end h-full items-end">
                <img src="/images/profile.png" className="h-[92%]"/>
            </div>
            <div className="polygon absolute h-[70%] w-full bottom-0 bg-gray-800/70 z-10">
            </div>
            <div className="absolute w-[60%] bottom-10 z-15 text-gray-100 pl-10">
                <div className="text-xl">
                    Hi, I am
                </div>
                <div className="text-3xl">
                    Jeno M. Carisma
                </div>
                <div className='text-sm'>
                    Full Stack Developer
                </div>
            </div>
            <div className='absolute w-12 right-10 bottom-10 flex flex-col gap-2 text-white z-20'>
                <div className='p-2 rounded-full hover:bg-mnightblue hover:text-gray-200 cursor-pointer ease-in-out duration-300'>
                    {icons.email}
                </div>
                <div  className='p-2 rounded-full hover:bg-mnightblue hover:text-gray-200 cursor-pointer ease-in-out duration-300'>
                    {icons.git}
                </div>
                <div  className='p-2 rounded-full hover:bg-mnightblue hover:text-gray-2 00 cursor-pointer ease-in-out duration-300'>
                    {icons.linkedin}
                </div>

            </div>
           
        </nav>
        
     );
}
 
export default Home;