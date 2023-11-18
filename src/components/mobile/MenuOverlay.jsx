import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { links, socialIcons } from "../../constants/constants";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const MenuOverlay = ({ closeMenuHandler }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  const handleXClick = () => {
    setFade(false);
    setTimeout(() => {
      closeMenuHandler();
    }, 200);
  };

  return (
    <div
      className={`bg-black font-fira bg-opacity-60 absolute top-0 h-screen w-screen z-40 transition-opacity duration-200 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute top-3 h-3/4 left-3 rounded-xl border border-tertiary-blue right-3 bottom-3 bg-main-blue flex flex-col`}
      >
        <div className="w-full flex justify-between items-center p-4">
          <h1 className="text-secondary-blue">aidan-mcalister</h1>
          <button className="w-7 text-secondary-blue" onClick={handleXClick}>
            <XMarkIcon />
          </button>
        </div>
        <hr className="border-tertiary-blue border-b-1 w-full" />
        {links.map((link, index) => (
          <div key={index} className="font-fira">
            <Link to={link.href} onClick={handleXClick}>
              <p className="p-4 hover:font-bold hover:text-secondary-blue transition-all">
                {link.label}
              </p>
            </Link>
            <hr className="border-tertiary-blue border-b-1 w-full" />
          </div>
        ))}
        <div className="flex-1 flex items-end">
          <div className="border-t border-tertiary-blue w-full flex items-center h-fit justify-between">
            <p className="text-secondary-blue pl-4">find me in:</p>
            <div className="flex">
              {socialIcons.map((link, index) => (
                <div
                  key={index}
                  className="border-l border-tertiary-blue h-full"
                >
                  <SocialIcon
                    url={link.url}
                    href={link.href}
                    bgColor="transparent"
                    fgColor="#1E2D3D"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
