import React from 'react'
import Navbar from '../../components/Navbar'
import CreateNewCard from '@/components/CreateNewCard'
import NavbarWrapper from '@/components/NavbarWrapper'


const Collections = () => {
  return (
    <NavbarWrapper>
      <div className='flex flex-col items-center justify-between bg-white'>
        <CreateNewCard /> 
      </div>
    </NavbarWrapper>
  )
}

export default Collections