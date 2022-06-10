import React from 'react'
import './StudyMaterials.css'

const StudyMaterials = () => {
  return (
    <div className="study-materials">
      <div className="studymaterials-container">
        <div className="firstdiv">
          <h1 className="StudyText">Study Materials</h1>
          <input type="text" className="searchBarstudy" placeholder="Search" />
          <img src="" alt="" />
        </div>
        <div className="seconddiv">
          <h1 className="sub1 text-[3vw] text-[#8649EB] ml-[13%] ">Subject1</h1>
          <div className="subjectcards">
            <div className="subcard1">
              <h1 className="text-[2.3vw] text-white ml-6 pt-5">Unit1</h1>
              <h2 className="text-[2.3vw] text-white ml-6 pt-5">Session 1-3</h2>
            </div>
            <div className="subcard2">
              <h1 className="text-[2.3vw] text-white ml-6 pt-5">Unit2</h1>
              <h2 className="text-[2.3vw] text-white ml-6 pt-5">Session 4-6</h2>
            </div>
            <div className="subcard3">
              <h1 className="text-[2.3vw] text-white ml-6 pt-5">Unit3</h1>
              <h2 className="text-[2.3vw] text-white ml-6 pt-5">
                Session 7-10
              </h2>
            </div>
          </div>
        </div>
        <div className="thirddiv">
          <h1 className="sub1 text-[3vw] text-[#8649EB] ml-[13%] ">Subject2</h1>
          <div className="subjectcards">
            <div className="subcard1">
              <h1 className="text-[2.3vw] text-white ml-6 pt-5">Unit1</h1>
              <h2 className="text-[2.3vw] text-white ml-6 pt-5">Session 1-3</h2>
            </div>
            <div className="subcard2">
              <h1 className="text-[2.3vw] text-white ml-6 pt-5">Unit2</h1>
              <h2 className="text-[2.3vw] text-white ml-6 pt-5">Session 4-6</h2>
            </div>
            <div className="subcard3">
              <h1 className="text-[2.3vw] text-white ml-6 pt-5">Unit3</h1>
              <h2 className="text-[2.3vw] text-white ml-6 pt-5">
                Session 7-10
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyMaterials