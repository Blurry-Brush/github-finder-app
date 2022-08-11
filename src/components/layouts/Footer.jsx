import React from 'react'
import {FiTarget} from 'react-icons/fi'

function Footer() {
  
  const footerYear = new Date().getFullYear();

    

  return (
    <footer className='footer p-3 bg-gray-700 text-primary-content footer-center z-10'>
        <div>
            <FiTarget size="2em"></FiTarget>
            <p>Copyright &copy; {footerYear} </p>
        </div>
    </footer>
  )
}

export default Footer