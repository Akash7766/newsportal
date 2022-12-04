import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorElements = () => {
  return (
    <div className="h-screen flex justify-center items-center">
       <div className="flex justify-center items-center">
            <Link to="/">
                <FaAngleLeft class="fa-solid fa-arrow-left text-3xl font-bold"/>
            </Link>  
            <p>Something went wrong</p>
       </div>
    </div>
  );
};

export default ErrorElements;