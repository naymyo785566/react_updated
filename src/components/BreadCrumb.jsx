import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({currentTitle}) => {
  return (
    <div className='w-full flex mb-5 gap-3'>
        <Link to='/' className='text-gray-500'>Home</Link>
        <span className='text-gray-500'>/</span>
        <p>{currentTitle}</p>
      
    </div>
  )
}

export default BreadCrumb