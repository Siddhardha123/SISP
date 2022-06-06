import React from 'react'
import SISPlogo from '../assets/SISPlogo.svg'
import '../assets/common/Navbar.css'
import profileLogo from '../assets/account 1.svg'
const Navbar = () => {
  return (
    <div className="flex bg-[#FFCEC7] h-[75px] justify-between">
      <div>
        <img src={SISPlogo} alt="logo" />
      </div>
      <div className="w-[60%]">
        <ul className="flex justify-between pt-5">
          <li className="Navlink">
            <a href="/Academics">Academics</a>
          </li>
          <li className="Navlink">
            <a href="/StudyMaterilas">Study Materials</a>
          </li>
          <li className="Navlink">
            <a href="/InternshipInfo">Internship Info</a>
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