"use client";

import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
