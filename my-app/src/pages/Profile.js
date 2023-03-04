import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUserdata } from '../feature/navSlice'
import { db } from '../firebase'

function Profile() {

    const [userData, setuserData] = useState()
    const userValue = useSelector(selectUserdata)
    const [formDate, setformDate] = useState()

    useEffect(async () => {
        const docRef = doc(db, "userInfo", userValue.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setformDate(docSnap.data())
            console.log("This seller data", docSnap.data());
        }
    }, [])


    return (
        <div>Profile</div>
    )
}

export default Profile