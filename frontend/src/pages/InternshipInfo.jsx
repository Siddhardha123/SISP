import React from 'react'
import InternInfoCard from '../components/InternInfoCard'
import '../pages/InternshipInfo.css'

const InternshipInfo = () => {
  return (
      <div className="container">
        <div className="leftDiv">
          <h1 className="internshipText">Internship Information</h1>
          <input type="text" className="searchBar" placeholder="Search" />
          <img src="" alt="" />
          <div className="InternCards">
            <InternInfoCard className="card1">
              <h1 className="text-5xl text-white ml-6 pt-5">1.0</h1>
            </InternInfoCard>
            <InternInfoCard className="card2">
              <h1 className="text-5xl text-white ml-6 pt-5">2.0</h1>
            </InternInfoCard>
            <InternInfoCard className="card3">
              <h1 className="text-5xl text-white ml-6 pt-5">3.0</h1>
            </InternInfoCard>
          </div>
        </div>
        <div className="rightDiv">
          <h1 className="text-5xl text-white absolute left-72  top-[34%] z-30 ">
            Upcoming
          </h1>
          <div className="upcoming"></div>
        </div>
      </div>
  );
}

export default InternshipInfo