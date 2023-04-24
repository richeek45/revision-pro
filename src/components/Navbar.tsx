import React from 'react'
import "../styles/globals.css"

const Navbar = () => {
  const handleOpenSideBar = () => {
    console.log('It is working')
  }

  return (
    <div className='flex justify-between shadow-sm p-2 border-2 w-full m-4' >
      <button onClick={handleOpenSideBar} className='cursor-pointer text-white bg-violet-500 p-2 px-6 rounded shadow-md mr-10 ml-10'>
        Home 
      </button>
      <div>Navbar</div>

    </div>
  )
}

export default Navbar