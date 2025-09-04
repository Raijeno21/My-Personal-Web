import Home from "./Home";
import Head from "./Head";
import HomeNav from "./HomeMenu";
import { useRef, useState } from "react";

const App = () => {
  const homeRef = useRef<HTMLElement | null>(null);
  const [isHome, setisHome] = useState<boolean>(true);
  return (
    <>
      <div className="fixed top-0 z-10 h-[8%] w-full border-b border-white/50 bg-black/5 lg:hidden lg:border-none">
        <Head isHome={isHome} setisHome={setisHome} />
      </div>
      {isHome ? (
        <div>
          <Home />
        </div>
      ) : (
        <div>
          <HomeNav homeRef={homeRef} />
        </div>
      )}
    </>
  );
};

export default App;
