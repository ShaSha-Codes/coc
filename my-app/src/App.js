import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { ADD_TO_USERDATA } from './feature/navSlice';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

function App() {

  const [user, setuser] = useState(null);
  const dispatch = useDispatch();

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, "userInfo", user.email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            dispatch(ADD_TO_USERDATA(docSnap.data()));
          }
        } else {
          console.log("Null")
        }
      }),
    []
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
