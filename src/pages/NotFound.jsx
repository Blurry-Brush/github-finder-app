import React from "react";
import { Link } from "react-router-dom";
import {TiHome} from 'react-icons/ti'

function NotFound() {
  return (
    <div className="flex flex-col justify-around items-center gap-6">
      <h1 className="font-bold text-7xl ">OOPS</h1>
      <h2 className="font-bold text-5xl">Not Found</h2>
      <div className="">
        <button className="btn btn-primary"><Link to="/">

         <div className="flex flex-row gap-3 items-center">
          
            <TiHome size="2em"></TiHome>

            <h1 className="text-lg">Go to Home</h1>
         </div>
         
         </Link> </button>
      </div>
    </div>
  );
}

export default NotFound;
