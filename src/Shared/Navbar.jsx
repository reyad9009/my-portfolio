import React, { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const commonClass =
    "p-2 rounded-lg hover:bg-transparent hover:text-[#6429ef] hover:bg-pink-300 font-bold text-lg text-black cursor-pointer";

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
        to="Education"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        Education
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        Project
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={800}
        className={commonClass}
      >
        Contact
      </ScrollLink>
    </>
  );

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="navbar">
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
              {links}

              <div className="mb-2">
                <button
                  className="btn text-black btn-neutral w-full bg-[#6429ef] rounded-lg border-non"
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
            <span className="text-3xl text-[#6429ef] font-bold">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 space-x-4">
            {links}
          </div>
        </div>

        {/* End Section */}
        <div className="navbar-end ">
          <div className="hidden lg:ml-2 lg:flex lg:items-center lg:gap-3">
            <div>
              <button
                className="btn btn-neutral bg-[#6429ef] rounded-lg border-none text-white"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
