import { ReactNode } from "react";
import Header from "../components/general/Header";

//ToDo: Remove "pb-8" later
const HomeLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="pb-8">
      <Header />
      <div className="max-w-5xl m-auto">{children}</div>
    </div>
  );
};

export default HomeLayout;
