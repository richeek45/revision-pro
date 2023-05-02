import React from 'react'

const CreateNewCard = () => {
  const handleCreateNew = () => {
    console.log("Creating New Card!")
  }

  return (
    <button onClick={handleCreateNew} className='w-56 h-56 border-4 border-gray-300 shadow-md hover:border-indigo-400 hover:shadow-lg hover:scale-105 duration-75 border-dashed flex flex-col justify-around items-center'> 
      <div className='w-28 h-28 bg-gray-200 rounded'></div>
      <p className='text-gray-400'>CREATE NEW COLLECTION</p>
    </button>
  )
}

export default CreateNewCard