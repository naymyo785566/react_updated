import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-full h-full flex justify-center items-center'>
        <div className="text-center">
            <h1 className='text-5xl font-bold mb-3'>404 Not Found</h1>
            <p className='w-96 text-gray-100 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus laborum officia dolor, earum molestiae fugit, modi a illo molestias tenetur odit quas, reprehenderit doloremque eius. Reiciendis soluta delectus laborum!</p>
            <Link to={'/'} className='border border-black px-4 py-1'>Return to Home</Link>
        </div>
    </section>
  )
}

export default ErrorPage