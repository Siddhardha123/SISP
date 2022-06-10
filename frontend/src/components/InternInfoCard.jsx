import React from 'react'
import "../components/InternInfoCard.css";
const InternInfoCard = (props) => {
  return (
    <div className='Card'>
           <h1>{props.children}</h1>
    </div>
  )
}

export default InternInfoCard