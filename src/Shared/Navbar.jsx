import React, { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link, NavLink} from "react-router-dom";
import { toast } from "react-toastify";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  // Try to get the theme from localStorage if available, otherwise default to 'light'
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const commonClass =
    "p-2 rounded-lg hover:bg-transparent hover:text-pink-500 hover:bg-pink-300 font-bold text-lg text-black cursor-pointer";

  const links = (
    <>
      <NavLink to="/" className={commonClass}>
        Home
      </NavLink>
      <ScrollLink
        to="About"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        About
      </ScrollLink>
      <ScrollLink
        to="skills"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        Skills
      </ScrollLink>
      <ScrollLink
        to="Choose"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        Education
      </ScrollLink>
      <ScrollLink
        to="Choose"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        Project
      </ScrollLink>
      <ScrollLink
        to="Choose"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        Contact
      </ScrollLink>
    </>
  );

  return (
    <nav className="bg-pink-200">
      <div className="navbar container mx-auto  px-4">
        {/* Start Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow rounded-box w-52 bg-pink-100"
            >
              {/*==========================================================  */}
              <button
                onClick={toggleTheme}
                data-tooltip-content={"Change Theme"}
                data-tooltip-id="my-tooltip"
                data-tooltip-place="top"
              >
                {theme === "dark" ? (
                  <div>
                    {/* sun icon */}
                    <svg
                      className="swap-off h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                  </div>
                ) : (
                  <div>
                    {/* moon icon */}
                    <svg
                      className="swap-on h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </div>
                )}
              </button>
              {/*==========================================================  */}

              {links}

              <div className="mb-2">
                <button
                  className="btn text-black btn-neutral w-full bg-pink-500 rounded-lg border-none hover:bg-pink-700"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"Download Resume When This Prepared"}
                  data-tooltip-place="top"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
          <Link to="/" className="">
            <span className="text-xl md:text-2xl text-pink-600 font-semibold">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 space-x-4">
            {links}

            {/*==========================================================  */}
            <button
              onClick={toggleTheme}
              data-tooltip-content={"Change Theme"}
              data-tooltip-id="my-tooltip"
              data-tooltip-place="top"
            >
              {theme === "dark" ? (
                <div>
                  {/* sun icon */}
                  <svg
                    className="swap-off h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                </div>
              ) : (
                <div>
                  {/* moon icon */}
                  <svg
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </div>
              )}
            </button>
            {/*==========================================================  */}
          </div>
        </div>

        {/* End Section */}
        <div className="navbar-end ">
          

          <div className="hidden lg:ml-2 lg:flex lg:items-center lg:gap-3">
            <div>
              <button
                className="btn btn-neutral bg-pink-500 rounded-lg border-none text-black hover:bg-pink-700"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={"Download Resume When This is Prepared"}
                data-tooltip-place="top"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
        <Tooltip id="my-tooltip" />
      </div>
    </nav>
  );
};

export default Navbar;
