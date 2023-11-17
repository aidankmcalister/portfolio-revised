import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="border w-full fixed top-0 h-10 flex items-center p-3 justify-between">
      <Link to="/">
        <h1 className="font-fira font-light">aidan-mcalister</h1>
      </Link>
    </div>
  );
};

export default Navbar;
