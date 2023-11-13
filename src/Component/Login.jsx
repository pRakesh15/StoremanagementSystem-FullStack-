import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
  
  return (
    <>
      <div className="bg-slate-300 h-screen">
        <Navbar />
        <div className=" flex flex-col items-center ">
          <h1 className="font-Cinzel text-4xl border-b-2 border-black p-4 px-10 mt-10">
            Login
          </h1>
          <div className="flex border-2  mt-6 bg-white rounded-2xl shadow-xl shadow-yellow-200">
            
            <div className="flex flex-col p-5">
              <h1 className="text-xl pl-16 mt-10 pb-3 border-b-2 border-black">
                Members Login
              </h1>
              <form  className="flex flex-col">
              <input
                className="mt-8 w-72 h-9 p-1 border-2 outline-none border-yellow-500 rounded"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={e=>setEmail(e.target.value)}
                required
              />
              <input
                className="mt-2 w-72 h-9 p-1 border-2 outline-none border-yellow-500 rounded"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <button
               className="bg-yellow-400 h-8 w-20 text-xl rounded mt-5 ml-24 flex items-center justify-center"
              
           
               >
                Login
              </button>
              </form>
              <p className="ml-[48px] mt-6 text-xl">
                New Here ?{" "}
                <Link
                  to="/signup-user"
                  className="text-green-500 border-b-2 border-yellow-500"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
