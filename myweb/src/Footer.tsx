import { icons } from "./svg";
import type { HomeRef } from "./types";

const Footer = ({ homeRef }: HomeRef) => {
  const handleNavtoTop = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("wew");
  };
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 flex h-40 flex-col border bg-mnightblue py-7 text-xs text-white">
      <div className="flex h-full w-full flex-1 flex-col gap-1">
        <div className="flex h-1/2 w-full items-center justify-center">
          <div
            className="aspect-square h-5 rotate-270 cursor-pointer"
            onClick={handleNavtoTop}
          >
            {icons.doubleArrow}{" "}
          </div>
        </div>
        <span className="flex w-full justify-center">BACK TO TOP</span>
      </div>
      <div className="flex w-full flex-1 items-center justify-center">
        facebook linked in instagram email
      </div>
      <div className="flex flex-1 items-center justify-center">
        {year} Jeno M. Carisma. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
