import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react'
import { auth, db } from '../firebase';

const Login = () => {

  const signWithEmailId = async ({ email, password }) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        var userinfo = userCredential.user;
        const docRef = doc(db, "userInfo", userinfo.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          userinfo.displayName = docSnap.data().name;
          userinfo.photoURL = docSnap.data().photourl;
        }
        // console.log("This login time data", userinfo.displayName);
        // setuser(userinfo);
      })
      .catch((error) => {
        const errorCode = error.code;
        // console.log(errorCode);
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };


  return (
    <div>Login</div>
  )
}

export default Login