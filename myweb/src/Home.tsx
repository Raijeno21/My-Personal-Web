import AboutMe from "./AboutMe.tsx";
import ContactMe from "./ContactMe.tsx";
import Portfolio from "./Portfolio.tsx";
import Skills from "./Skills.tsx";
import { icons } from "./svg.tsx";
import TechStack from "./TechStack.tsx";
const Home = () => {
  const menu = ["About Me", "Skills", "TechStack", "Portfolio", "Contact Me"];

  return (
    <nav className="relative z-0 h-screen sm:bg-mnightblue md:bg-white">
      <div className="absolute top-0 z-30 hidden w-full items-center justify-between p-5 lg:flex">
        <div className="flex h-15 flex-1">
          <img
            src="images/logo.png"
            className="aspect-square h-15 rounded-full"
          />
        </div>
        <div className="flex flex-1 justify-between pl-40 text-sm whitespace-nowrap text-white duration-300 ease-in-out lg:gap-2 xl:justify-end xl:gap-5">
          {menu.map((nav, i) => (
            <a
              key={i}
              href={`#${nav}`}
              className="cursor-pointer rounded-full border px-3 py-1 hover:bg-white hover:text-black lg:text-xs xl:text-sm"
            >
              {nav}
            </a>
          ))}
        </div>
      </div>
      <div className="relative flex h-full items-end justify-end lg:z-20">
        <img src="/images/profile.png" className="h-[92%]" />
      </div>
      <div className="polygon absolute bottom-0 z-10 h-[70%] w-full bg-gray-800/70 lg:z-0 lg:h-full lg:bg-mnightblue"></div>

      <div className="absolute bottom-10 z-30 flex w-full justify-between text-white xsm:p-5 sm:bottom-7 sm:px-10 md:bottom-[35%] md:flex-col md:gap-5">
        <div className="bottom-10 flex w-[60%] flex-col justify-end pb-2 text-sm text-gray-100 md:text-black">
          <div className="xsm:text-lg md:text-3xl">Hi, I am</div>
          <div className="text-2xl text-nowrap sm:text-3xl md:text-5xl">
            Jeno Carisma
          </div>
          <div className="text-[10px] sm:text-sm md:text-3xl">
            Web Developer
          </div>
        </div>
        <div className="w-12 md:flex md:h-12 md:w-full md:gap-5 md:text-black">
          <div className="icon">{icons.email}</div>
          <div className="icon">{icons.git}</div>
          <div className="icon">{icons.linkedin}</div>
        </div>
      </div>
      <div className="absolute bottom-0 z-30 hidden h-[12%] w-full border bg-black lg:flex"></div>
      <div className="hidden lg:block">
        <section id="About Me">
          <AboutMe />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="TechStack">
          <TechStack />
        </section>
        <section id="Portfolio">
          <Portfolio />
        </section>
        <section id="Contact Me">
          <ContactMe />
        </section>
      </div>
    </nav>
  );
};

export default Home;
