import React, { useState } from "react";
import lightLogo from "../assets/infotreklightlogo.png";
import darkLogo from "../assets/infotrekdarklogo.png";
import { Link } from "react-router-dom";
import { useLogin } from "./contexts/LoginContext";
import { useEffect } from "react";

export default function Nav({ dark }) {
  const { loginData } = useLogin();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`flex flex-col md:flex-row justify-between items-center p-3 ${
        dark ? "bg-green-1000" : "bg-off-white"
      }`}
    >
      <div className="flex justify-between w-full md:w-auto">
        <Link to="/">
          <div className="min-w-[240px]">
            <img src={dark ? lightLogo : darkLogo} className="nav-logo-div" alt="logo" />
          </div>
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`flex-col md:flex-row flex-grow md:flex justify-between items-center ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <ol className="font-bold flex flex-col md:flex-row justify-between items-center md:min-w-[240px]">
          <li>
            <Link
              to="/"
              className={`no-underline ${
                dark ? "text-white nav-link-hover" : "text-green-1000"
              } `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`no-underline ${
                dark ? "text-white nav-link-hover" : "text-green-1000"
              } `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={`no-underline ${
                dark ? "text-white nav-link-hover" : "text-green-1000"
              } `}
            >
              Team
            </Link>
          </li>
        </ol>
        <div className="flex flex-col md:flex-row justify-around items-center md:min-w-[240px]">
          {!loginData.status ? (
            <Link to="/login" className="no-underline text-center">
              <div
                className={`border rounded-md py-2 px-3 ${
                  dark ? "hover:bg-green-900" : ""
                }`}
              >
                <p className={`${dark ? "text-white" : "text-green-1000"} font-bold m-0`}>
                  LOG IN
                </p>
              </div>
            </Link>
          ) : (
            <Link to="/profile" className="no-underline text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500">
                <p className="text-white font-bold m-0">
                  {loginData.name.charAt(0).toUpperCase()}
                </p>
              </div>
            </Link>
          )}
          <Link to="/events" className="no-underline text-center">
            <div className="rounded-md py-2 px-3 bg-neon-100 hover:bg-neon-80">
              <p className="text-black font-semibold m-0">SEE EVENTS</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
