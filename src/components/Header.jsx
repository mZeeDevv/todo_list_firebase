import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router'
export default function Header() {
  const nave = useLocation()
  return (
    <>
    <div className='flex justify-between py-3 px-2 text-white items-center
    font-bold border-b-2 border-blue-600 mb-3
    '>
      <h1
      className='text-xl'
      >
        My Todo List</h1>
      <div className='flex'>
        <AiOutlineUser
        className='text-2xl text-green-500 font-semibold'
        />
       {nave.pathname == "/profile" && (
        <p></p>
       )}
      </div>
    </div>
    
    </>
  )
}
