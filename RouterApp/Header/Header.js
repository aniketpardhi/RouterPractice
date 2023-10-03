import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" container  bg-yellow-300">
        <div className=" p-4 flex flex-row  flex items-center flex justify-between">
          <div className="logo">
            <h3><NavLink to="/">MyLogo</NavLink></h3>
          </div>
          <div className="d">
            <ul className="flex flex-row  flex items-center gap-4 ">
              <li className="">
                <NavLink
                
                  to="/"
                  className=" hover:text-red-600 cursor-pointer"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}

                  
                >
                  Home
                </NavLink>
              </li>
              <li className=" hover:text-red-600 cursor-pointer">
                <NavLink
                  to="/About"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className=" hover:text-red-600 cursor-pointer">
                <NavLink
                  to="/ContactUs"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className=" hover:text-red-600 cursor-pointer">
                <NavLink
                  to="/Services"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
