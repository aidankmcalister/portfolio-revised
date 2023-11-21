import React from "react";

const MainCard = () => {
  return (
    <div className="text-xl lg:text-2xl leading-10">
      <p>Hey. I'm</p>
      <h1 className="text-6xl lg:text-8xl my-1">
        Aidan
        <br className="block lg:hidden" /> McAlister
      </h1>
      <p className="text-main-green md:text-main-text-blue">&gt; Full-stack developer</p>
    </div>
  );
};

export default MainCard;
