import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-full ms:mt-10 bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:object-fill max-w-[1536px]">
        <img
          className="w-full p-absolute lg:mt-0 md:mt-[5%] sm:mt-[80%]"
          src="./images/bannertop.png"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Banner;
