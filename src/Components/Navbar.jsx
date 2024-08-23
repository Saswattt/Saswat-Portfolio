// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>

    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/saswat-k-sahoo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/Saswattt" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.instagram.com/saswatlifts?igsh=N2hhanhseGhjZ3l5" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>

  </nav>

}

export default Navbar
