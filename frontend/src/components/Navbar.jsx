import React from 'react'
import SISPlogo from '../assets/SISPlogo.svg'
import profileLogo from '../assets/account 1.svg'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="flex bg-[#FFCEC7] h-[75px] justify-between w-100%">
      <div>
        <Link to="/">
          <img src={SISPlogo} alt="logo" />
        </Link>
      </div>
      <div className="w-[60%]">
        <ul className="flex justify-between pt-5 ">
            <li className="Navlink">
              <Link to="/Academics">Academics</Link>
            </li>
       
          <li className="Navlink">
            <Link to="/Studymaterials">Study Materials</Link>
          </li>
          <li className="Navlink">
            <Link to="/Internshipinfo">Internship Info</Link>
          </li>
          <li className="Navlink">
            <Link to="/StudentForum">Student Forum</Link>
          </li>
          <li className="Navlink mx-5 my-[-8px]">
            <Link to="/profile">
              <img src={profileLogo} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar