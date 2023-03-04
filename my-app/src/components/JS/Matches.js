import React from "react";
import profile from '../../assets/profile.jpg'
import { useSelector } from 'react-redux'
import { selectUserdata } from '../../feature/navSlice'
import { doc, updateDoc,getDoc } from "firebase/firestore";
import {db} from '../../firebase'
import Stack from '@mui/material/Stack';
const Matches = () => {
  const userValue =  useSelector(selectUserdata)
  const [comp,setComp]=React.useState([])

  const swiped = async (email) => {
  
      const ref = doc(db, "userInfo", email);
      const docSnap = await getDoc(ref)
      const data=docSnap.data()
  
      return data
   
    
  }

  const swiped2=async()=>{
    if(userValue){
      let resData=[]
      for(let i=0;i<userValue.request.length;i++){
        let tempData=await swiped(userValue.request[i])
      
        
        resData.push(
             
          <div style={{marginRight:'auto'}} className="row">
            <div className="avatar">
              <img src={tempData.photourl} width={100} height={100} className="img" />
            </div>
            <div className="left">{tempData.name}</div>
            
            <div  className="right" style={{ marginLeft: "200px" }}>
              <button className="accept">+</button>
              <button className="reject">-</button>
            </div>

          </div>
        
        )
      }
      setComp(resData)
    }
  }

  React.useEffect(()=>{
    swiped2()
  },[0])
 
 




  return (
    
       
      <div className="matches-container">
         <span style={{marginTop:'30px'}}>Your Matches</span>
        <div className="matches-textbox">
         <Stack spacing={2} alignItems="center">
  
          {comp}
        </Stack>


        </div>
      </div>
   
  );
};

export default Matches;
