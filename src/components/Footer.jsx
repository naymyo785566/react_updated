import React from 'react'
import Container from './Container'

const Footer = () => {
    const date= new Date()
  return (
  
       <footer className='mx-5 mt-auto bg-black text-white text-center py-2'>
        Copyright &copy; {date.getFullYear()} {""}
        <a href="https//www.mmsit.com" className='text-gray-300 underline'>MMS IT</a>. 
        All right reserved.
        </footer>

  )
}

export default Footer