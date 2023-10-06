"use client";

import Lottie from "lottie-react";
import error from "../public/notfound.json";

const NotFound = () => {
  return (
    <div>
      <Lottie animationData={error} loop={true} />
      <p> not found</p>
    </div>
  );
};

export default NotFound;
