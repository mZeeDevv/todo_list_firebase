import React from 'react'


export default function Todolists({todo, id, time}) {
  const localDate = time.toLocaleDateString();
  const localtime = time.toLocaleTimeString();
  return (
    <div>
      <div className='bg-white m-6 rounded text-black text-xl p-3 shadow-lg hover:shadow-md'>
      <h1 className='text-2xl'><span className='font-bold '>Todo:</span> {todo.Task}</h1>
     <h1 className='my-2'>Added on {localDate} at {localtime}</h1>
    </div>
    </div>
  )
}
