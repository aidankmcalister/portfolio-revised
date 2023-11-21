import React from "react";
import { SocialIcon } from "react-social-icons";
import { socialIcons } from "../../constants/constants";

const Footer = () => {
  return (
    <div className="w-full border-t border-tertiary-blue flex-shrink-0">
      <div className="w-full flex items-center justify-between px-4">
        <p className="text-secondary-blue">find me in:</p>
        <div className="flex">
          {socialIcons.map((link, index) => (
            <div key={index} className="border-l border-tertiary-blue h-full">
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
  );
};


export default Footer;
