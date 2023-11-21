import React from "react";

const FindProfileCard = () => {
  return (
    <div>
      <p className="text-gray-500 mb-4">// check out my github:</p>
      <a
        href="https://github.com/aidankmcalister"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-[#4D5BCE]">const</span>{" "}
        <span className="text-main-green">githubLink</span> ={" "}
        <span className="text-[#E99287]">
          "
          <span className="underline">
            https://
            <br className="block lg:hidden" />
            github.com/aidankmcalister
          </span>
          "
        </span>
      </a>
    </div>
  );
};

export default FindProfileCard;
