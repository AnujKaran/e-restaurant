import React from "react";

import ErroImage from "../assest/img/error-404.jpg";
import err2 from "../assest/img/400-error.png";
const Errorpage = ({errorCode}) => {
  if (errorCode === 404) {
    return (
      <div className="w-full flex justify-center items-center h-screen ">
        <img src={ErroImage} className="h-screen"alt="" />
      </div>
    );
  } 
  if(errorCode === 400) {
   return <div className="w-full flex justify-center items-center h-screen ">
      <img src={err2} className="h-screen" alt="" />
    </div>;
  }
};

export default Errorpage;
