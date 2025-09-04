import type { HomeRef } from "./types";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import TechStack from "./TechStack";
import Footer from "./Footer";

const HomeNav = ({ homeRef }: HomeRef) => {
  const menu = ["About Me", "Skills", "TechStack", "Portfolio", "Contact Me"];
  return (
    <main className="overflow-y-hidden">
      <nav className="relative h-screen w-full" ref={homeRef}>
        <img
          src="/images/dev_background.avif"
          className="h-full w-full object-left"
        />
        <div className="absolute top-[8%] w-full bg-gray-200/20">
          <div className="flex flex-col text-white">
            {menu.map((nav, i) => (
              <a
                key={i}
                href={`#${nav}`}
                className="flex w-full cursor-pointer justify-center p-2 hover:bg-white hover:text-black"
              >
                {nav}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-20 flex w-full flex-col items-center text-sm text-white">
          <div>
            My name is <span className="pl-2 text-xl">JENO</span>
          </div>
          <div>
            I'm a <span className="pl-2 text-xl">DEVELOPER</span>
          </div>
        </div>
      </nav>
      <div className="w-full">
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
      <Footer homeRef={homeRef} />
    </main>
  );
};

export default HomeNav;
