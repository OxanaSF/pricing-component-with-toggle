import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="card">
        <div className="card-content-top">Basic</div>
        
        <div className="card-content-dollar">19.99</div>
  
        <div className="card-content">500 GB Storage</div>
     
        <div className="card-content">2 Users Allowed</div>
   
        <div className="card-content"> Send up to 3 GB</div>
   
        <button className="btn-purple">learn more</button>
    </div>
  )
}

export default Card