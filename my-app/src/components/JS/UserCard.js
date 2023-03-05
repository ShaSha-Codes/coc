import React from 'react'
import CardsUi from './CardsUi'
import Header from './Header'
import SwipeCards from './SwipeCards'
import {useSelector} from 'react-redux'
import { db } from '../../firebase'
import { Button } from '@mui/material'
import {
    selectUserdata
} from  '../../feature/navSlice'
import { collection, query, where, getDocs } from "firebase/firestore";

function UserCard() {
    const userData=useSelector(selectUserdata);
    const [toggler,setToggler]=React.useState(true)
    const [cardData,setCardData]=React.useState([])
    console.log(userData)

    const getDataBasedOnPreference=async ()=>{
        const q = query(collection(db, "userInfo"), where("gender", "==", userData.preference));
        const querySnapshot = await getDocs(q);
        let filteredData=querySnapshot.docs.map((doc)=>doc.data())
        return filteredData
    }

    const getCards=async()=>{
        setToggler(false)
        let data=await getDataBasedOnPreference()
        console.log(data)
        let tempData=[]
        for(let i=0;i<userData.hobbies.length;i++){
            for(let j=0;j<data.length;j++){
                if(data[j].hobbies.includes(userData.hobbies[i])){
                    data[j].euclidean = eucliedeanDistance(userData.lat,userData.long,data[j].lat,data[j].long)
                    tempData.push(data[j])
                }
            }
            
        }

        tempData=[...tempData,...data]
        tempData=[...new Set(tempData)]
        function eucliedeanDistance(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }
        tempData.sort((a,b) => a.euclidean - b.euclidean)
        let filteredData=tempData.map((doc)=><CardsUi key={doc.id} data={doc} />)
        setCardData(filteredData)  

        
    }

   

    return (
        <div>
            <Header />
            
            <div style={{
        'position':'fixed',
        'marginLeft':'30%',        
        'height': '100vh'} }>
 {cardData}
            </div>
            
            
            {toggler && 
            <div style={{'display': 'flex',
        
                'justifyContent': 'center',
                'align-items': 'center',
                'height': '100vh'} }>

            <Button sx={{fontSize:'20px',backgroundColor:'#ADD8E6',height:'100px',borderRadius:'2%'}}variant="contained" onClick={getCards}>
                Search
            </Button>
            </div>
            
            }
             
           
        </div>
    )
}

export default UserCard