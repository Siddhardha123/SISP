import React from 'react'
import "../components/InternInfoCard.css";
const InternInfoCard = (props) => {
  return (
    <div className='Card'>
           <h1>{props.name}</h1>
    </div>
  )
}

export default InternInfoCard