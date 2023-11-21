import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = ({ openMenuHandler }) => {
  return (
    <div className="border-b bg-main-blue text-secondary-blue border-tertiary-blue fixed w-full top-0 h-10 flex items-center px-4 py-6 justify-between">
      <Link to="/">
        <h1 className="font-fira font-light">aidan-mcalister</h1>
      </Link>
      <button onClick={openMenuHandler}>
        <Bars3Icon className="w-10" />
      </button>
    </div>
  );
};

export default Navbar;
