import { icons } from "./svg";

interface Homeprops {
  isHome: boolean;
  setisHome: React.Dispatch<React.SetStateAction<boolean>>;
}
const Head: React.FC<Homeprops> = ({ isHome, setisHome }) => {
  const handleSetisHome = () => setisHome((isHome) => !isHome);
  return (
    <div className="flex h-full w-full justify-between bg-black lg:hidden">
      <div className="logo h-full">
        <img src="/images/logo.png" className="h-full rounded-full p-2" />
      </div>
      <div className={`h-full p-5 text-white ${isHome ? "pr-8" : ""}`}>
        <span
          className={`cursor-pointer ${isHome ? "hover:text-gray-400-5" : "hover:text-red-400"}`}
          onClick={handleSetisHome}
        >
          {isHome ? icons.hamburger : icons.x}{" "}
        </span>
      </div>
    </div>
  );
};

export default Head;
