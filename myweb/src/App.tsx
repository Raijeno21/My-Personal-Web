import Home from "./Home";
import Head from "./Head";
import HomeNav from "./HomeMenu";
import { useRef, useState } from "react";
import Footer from "./Footer";


const App = () => {

const homeRef = useRef<HTMLElement| null> (null)
  const [isHome,setisHome] = useState<boolean>(true)

  return ( 
    <>
    <div className="fixed top-0 z-10 h-[8%] w-full bg-black/5 border-b border-white/50"><Head isHome={isHome} setisHome ={setisHome}/></div>
   {isHome?
    <div><Home/></div>:
    <div><HomeNav homeRef={homeRef}/></div>

   }
   <Footer homeRef = {homeRef}/>
 </>
   );
}
 
export default App;