import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUserdata } from '../feature/navSlice'
import { db } from '../firebase'
import '../components/CSS/Profile.css';
import Tilt from "react-vanilla-tilt";
import MaleIcon from '@mui/icons-material/Male';
import { Button, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


function Profile() {

    const [userData, setuserData] = useState()
    const userValue = useSelector(selectUserdata)
    const [formDate, setformDate] = useState()

    // useEffect(async () => {
    //     const docRef = doc(db, "userInfo", userValue.email);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         setformDate(docSnap.data())
    //         console.log("This seller data", docSnap.data());
    //     }
    // }, [])


    return (
        <div className="productitem">
            <Tilt
                style={{ margin: "100px auto", padding: "0px", width: "70%", height: "90%", }}
                options={{ scale: 8, glare: true, "max-glare": 1, max: 55, }}
            >
                <div className="profile-container">
                    <div className="profile-body">
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="avatar" />
                    </div>
                    <div className="profile-header">
                        <div className='profile_name'>
                            <h1 style={{ marginRight: "20px" }}>Saurabh Yadav</h1>
                            <IconButton style={{ color: "crimson", size: "40px" }}>
                                <MaleIcon />
                            </IconButton>
                        </div>
                        <h3 style={{ margin: "5px" }}>Saurabh@gmail.com</h3>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",margin:"5px" }}>
                            <h5>Hobbies :</h5>
                            <p>Chess</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",margin:"5px" }}>
                            <h5>Address :</h5>
                            <p> Thakur Village</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",margin:"5px" }}>
                            <h5>Phone :</h5>
                            <p> 9082502271</p>
                        </div>
                    </div>
                </div>
            </Tilt>
            <Button variant="contained" endIcon={<SendIcon />}>
                Find The Match
            </Button>

        </div>
    )
}

export default Profile

