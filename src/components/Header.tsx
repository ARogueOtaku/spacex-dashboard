import Logo from "./Logo";
import SpaceXLogo from "../assets/SpaceXLogo.svg";

const Header = (props: any) => {
  return (
    <div className="h-18 w-full flex items-center justify-center shadow">
      <Logo src={SpaceXLogo} name="SpaceX" className="h-8 ml-8" />
    </div>
  );
};

export default Header;
