import React from "react";
import MainCard from "../components/homeComponents/MainCard";
import FindProfileCard from "../components/homeComponents/FindProfileCard";

const Homepage = () => {
  return (
    <div className="md:flex items-center justify-between lg:mx-[10%] w-screen">
      <div className="mx-7 lg:mx-0 relative">
        <div className="absolute block lg:hidden -z-10 rounded-full h-80 w-80 -top-20 -left-24 bg-main-green opacity-25 filter blur-3xl"></div>
        <div className="absolute block lg:hidden -z-20 rounded-full h-80 w-80 bottom-0 left-24 bg-gradient-to-b from-blue-700 to-transparent opacity-30 filter blur-3xl"></div>
        <MainCard />
        <div className="mt-44">
          <FindProfileCard />
        </div>
      </div>
      <div className="relative md:block hidden">
        <div className="absolute -z-10 rounded-full h-[30rem] w-[30rem] -top-36 -left-36 bg-main-green opacity-30 filter blur-3xl"></div>
        <div className="absolute -z-20 rounded-full h-[30rem] w-[30rem] -bottom-36 -right-24 bg-blue-700 opacity-30 filter blur-3xl"></div>
        <div className="mr-10 border-main-green border md:h-[20rem] md:w-[20rem] lg:h-[30rem] lg:w-[30rem] bg-gradient-to-br from-[#175553] via-[#154d4b] to-transparent p-10 rounded-lg">
          test
        </div>
      </div>
    </div>
  );
};

export default Homepage;
