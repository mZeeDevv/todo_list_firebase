import React from "react";
import './index.css';
import {db} from "./firebase"
import {GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

function App() {
  async function Google()
  {
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log(user)
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <>
    <button
    onClick={Google}
    >GetAuth</button>

    </>
  );
}

export default App;
