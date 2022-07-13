import React from "react";
import "./progress.css"


const ProgressBar = ({ order }) => {
  const progress = (or) => {
    const count = or;
    const ratio = count / 10;
    return ratio * 100
  }
  return (
    <div className="container">
      <h1> Progress</h1>
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{ width: `${progress(order)}%` }}>
          <div className="progressbar-liquid"></div>
        </div>
        <span className="progress">{progress(order)}%</span>
      </div>
    </div>
  )
}


export default ProgressBar;