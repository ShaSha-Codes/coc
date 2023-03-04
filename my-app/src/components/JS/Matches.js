import React from "react";
import profile from '../../assets/profile.jpg'
const Matches = () => {
  return (
    <div className="matches">
        <span>Your Matches</span>
      <div className="matches-container">
        <div className="matches-textbox">
            
          <div className="row">
            <div className="avatar">
              <img src={profile} width={100} height={100} className="img" />
            </div>
            <div className="left">Areesha Sayed</div>
            
            <div className="right" style={{ marginLeft: "200px" }}>
              <button className="accept">+</button>
              <button className="reject">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
