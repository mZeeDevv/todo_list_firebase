import { addDoc, collection, doc, getDocs, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import { getAuth } from 'firebase/auth';
import Todolists from './Todolists';

export default function Main() {
  const [listing, setlisting] = useState([])
  const auth = getAuth();
  const [formData, setFormData] =useState({
    Task: "",
    userRef: auth.currentUser.uid,
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
  try {
    const docRef = await addDoc(collection(db, "Tasks"), formData);
    alert("Added to the list")
    setFormData({
      Task: " ",
      user: auth.currentUser.uid,
    })
  } catch (error) {
    alert("Not Added to the list please try again later")
  }
  }
  useEffect(() => {
    async function getData(){
    const docRef = collection(db, "Tasks")
    const q = query(
      docRef,
      where("userRef", "==", auth.currentUser.uid),
      orderBy("time", "asc"))
      const docSnap = await getDocs(q)
      const listings= [];
      docSnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setlisting(listings)
     

    }
    getData()
  }, [])
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
      className='text-white bg-[#872341] py-3 px-8 rounded-lg font-bold mt-6'>
        ADD
      </button>
     </form>
     </div>
     <div className='text-white'>
      {listing && listing.length > 0 &&(
        <>
        <h2 className='text-white text-center my-6 text-2xl  font-bold'>My Todo List</h2>
        <ul className='sm:grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 my-3'>
      {listing.map((listings) => (
        <Todolists
        key={listings.id}
        id={listings.id}
        todo={listings.data}
        time={listings.data.time.toDate()}
         />
      ))}
      </ul>
        </>
      )}
     </div>
    </div> 
  )
}
