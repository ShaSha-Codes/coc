import React from "react";
import profile from '../../assets/profile.jpg'
import { useSelector } from 'react-redux'
import { selectUserdata } from '../../feature/navSlice'


const Matches = () => {

  const userValue = useSelector(selectUserdata)
  const [requests, setRequests] = React.useState([])
  React.useEffect(() => {
    if (userValue) {
      setRequests(userValue.requests)
    }
    console.log(requests)    
  })
  return (
    
       
      <div className="matches-container">
         <span style={{marginTop:'30px'}}>Your Matches</span>
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
   
  );
};

export default Matches;
