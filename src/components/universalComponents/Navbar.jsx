import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { links } from "../../constants/constants";

const Navbar = ({ openMenuHandler }) => {
  return (
    <div className="border-b bg-main-blue text-secondary-blue border-tertiary-blue fixed w-full top-0 h-10 flex items-center px-4 py-6 justify-between">
      <Link to="/">
        <h1 className="font-fira font-light">aidan-mcalister</h1>
      </Link>

      <div className="hidden md:flex border-l border-tertiary-blue flex-grow ml-5">
        {links.map((link, index) => (
          <div
            key={index}
            className="font-fira px-5 border-r border-tertiary-blue"
          >
            <Link to={link.href}>
              <p className="hover:font-bold hover:text-secondary-blue transition-all">
                {link.label}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <button className="md:hidden block" onClick={openMenuHandler}>
        <Bars3Icon className="w-10" />
      </button>
    </div>
  );
};

export default Navbar;
