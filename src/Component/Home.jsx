import React from "react";
import Navbar from "./Navbar";
import Nac from "../images/NAAC-A-logo-1.png";
import img1 from "../images/rakesh.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-slate-300 h-screen">
      <Navbar />
      <div className="body flex flex-col justify-center items-center ">
        <img className="w-44 mt-8" src={Nac} alt="NAAC" />

        <h1 className="text-5xl mt-8">Welcome to</h1>
        <h1 className="text-5xl mt-2">Centurion Store !!</h1>
        <button className="text-lg bg-green-600 p-2 rounded-tl-lg rounded-br-lg hover:bg-green-700 mt-14 text-neutral-50">
          <Link to="store">GoTo Store</Link>
        </button>
      </div>
      
      <div className="flex  justify-center">
        <div className="card mt-16 w-72 -mb-24 bg-red-500">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={img1} alt="Sunset in the mountains" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-900 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
        <div className="card mt-16 w-72 ml-36 -mb-24 bg-emerald-500">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={img1} alt="Sunset in the mountains" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-900 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
        <div className="card mt-16 w-72 ml-36 -mb-24 bg-blue-800">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-800">
            <img className="w-full" src={img1} alt="Sunset in the mountains" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-900 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
