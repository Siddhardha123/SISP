import React from 'react'
import SISPlogo from '../assets/SISPlogo.svg'
import profileLogo from '../assets/account 1.svg'
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="flex bg-[#FFCEC7] h-[75px] justify-between w-100%">
      <div>
        <a href="/">
          <img src={SISPlogo} alt="logo" />
        </a>
      </div>
      <div className="w-[60%]">
        <ul className="flex justify-between pt-5 ">
          <li className="Navlink">
            <a href="/Academics">Academics</a>
          </li>
          <li className="Navlink">
            <a href="/StudyMaterilas">Study Materials</a>
          </li>
          <li className="Navlink">
            <a href="/internship">Internship Info</a>
          </li>
          <li className="Navlink">
            <a href="/StudentForum">Student Forum</a>
          </li>
          <li className="px-3 ">
            <img src={profileLogo} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar