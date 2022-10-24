import Image from "./Image";
import SpaceXLogo from "../../assets/SpaceXLogo.svg";

const Header = () => {
  return (
    <div className="h-18 w-full flex items-center justify-center shadow">
      <Image src={SpaceXLogo} name="SpaceX" className="h-8 ml-8" />
    </div>
  );
};

export default Header;
