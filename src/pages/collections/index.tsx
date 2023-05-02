import React from 'react'
import Navbar from '../../components/Navbar'
import CreateNewCard from '@/components/CreateNewCard'


const Collections = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
          <Navbar />
          <CreateNewCard /> 
    </div>
  )
}

export default Collections