import React from 'react'
import { useRouter } from 'next/router'


const Navbar = () => {
  const router = useRouter()

  const handleOpenSideBar = () => {
    console.log('It is working', router)
    router.push("/")
  }

  return (
    <div className='flex justify-between shadow-sm p-2 border-2 w-full m-4' >
      <button onClick={handleOpenSideBar} className='cursor-pointer text-white bg-violet-500 p-2 px-6 rounded shadow-md mr-10 ml-10'>
        Home 
      </button>
      <div>Navbar </div>

    </div>
  )
}

export default Navbar