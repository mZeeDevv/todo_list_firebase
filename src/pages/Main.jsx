import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import {db} from '../firebase'
import { getAuth } from 'firebase/auth';

export default function Main() {
  const auth = getAuth();
  const [formData, setFormData] =useState({
    Task: "",
    user: auth.currentUser.uid,
  })
  const {Task} = formData;
  function onChange(e) {
   setFormData((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value,
    time: serverTimestamp(),
   }))
  }
  async function onSubmit(e){
    e.preventDefault()
    const docRef = await addDoc(collection(db, "Tasks"), formData);
  }
  return (
    <div>
     <div className=''>
     <form className="flex flex-col max-w-2xl bg-white mx-auto items-center justify-center p-6 rounded shadow-lg">
     <h2 className='text-2xl font-bold mb-6 uppercase'>Add a new Todo</h2>
      <textarea
      required
      value={Task}
      onChange={onChange}
      id='Task'
      type='text'
      placeholder='Write your todo here....'
      className='w-full px-4 py-2 text-gray-700 bg-white border border-blue-700 rounded active:border-slate-600 mx-3'
      >
      </textarea>
      <button 
      type='submit'
      onClick={onSubmit}
      className='text-white bg-green-700 py-3 px-8 rounded-lg font-bold mt-6'>
        ADD
      </button>
     </form>
     </div>
    </div> 
  )
}
