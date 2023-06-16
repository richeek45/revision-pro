import React, { ReactComponentElement, ReactNode } from 'react'
import CreateNewCard from '@/components/CreateNewCard'
import SideBar from '@/components/SideBar'
import Navbar from './Navbar'


const NavbarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-between bg-white'>
          <Navbar />
          <div className='flex flex-row w-full'>
            <SideBar /> 
            {children}
          </div>
    </div>
  )
}

export default NavbarWrapper