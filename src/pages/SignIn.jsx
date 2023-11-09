import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {GiBubbles, GiCoinsPile} from 'react-icons/gi'
import { useNavigate } from 'react-router'
import {db} from "../firebase"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
export default function SignIn() {
  const nave = useNavigate()
  async function getUser()
  {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const results = await signInWithPopup(
        auth, 
        provider)
     const user = results.user;
     const docRef = doc(db, "users", user.uid)
     const docSnap = await getDoc(docRef)
     if(!docSnap.exists()) {
      await setDoc (docRef, {
        name: user.displayName,
        email: user.email,
        time: serverTimestamp()
     })
     nave("/profile")
     }
     else {
     nave("/profile")
     }
    } catch (error) {
     console.log(error) 
    }
  }
  return (
    <div className='max-w-xl bg-white mx-auto items-center flex flex-col p-6
    shadow-xl rounded 
    '>
       <div className='flex items-center text-3xl m-3'>
       <h1 className='font-bold'>Welcome </h1>
       <GiBubbles className='ml-2'/>
       </div>
       <p className='text-gray-600 m-3 font-mono'>You need to Register/Login to continue</p>
        <button 
        type='button'
        onClick={getUser}
        className='flex items-center justify-center bg-red-700 text-white
        uppercase py-4 text-sm font-medium hover:bg-red-800 px-16 rounded shadow-lg'>
          <FcGoogle
          className='mr-2 bg-white rounded-full text-2xl'
          />
          Continue with Google
        </button>
    </div>
  )
}
