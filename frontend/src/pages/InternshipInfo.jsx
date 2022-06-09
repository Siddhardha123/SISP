import React from 'react'
import InternInfoCard from '../components/InternInfoCard'
import '../pages/InternshipInfo.css'
import Navbar from '../components/Navbar'
const InternshipInfo = () => {

  return (
    <div>
      <div className="container">
        <div className="leftDiv">
          <h1 className="internshipText">Internship Information</h1>
          <input type="text" className="searchBar" placeholder="Search" />
          {/* <h3 className='searchText'>Search</h3> */}
          <img src="" alt="" />
          <div className="InternCards">
            <InternInfoCard className="card1" />
            <InternInfoCard className="card2" />
            <InternInfoCard className="card3" />
          </div>
        </div>
        <div className="rightDiv">
          <div className="upcoming"></div>
        </div>
      </div>
    </div>
  );
}

export default InternshipInfo