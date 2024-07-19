import { ReactNode } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=" flex flex-col items-center w-full bg-white font-sans  max-h-sv overflow-y-auto">
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;
