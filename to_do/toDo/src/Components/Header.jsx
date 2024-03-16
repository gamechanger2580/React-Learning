import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>Get Ready to Complete your goals !!!</nav>

      <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user/:id'>User</Link>
      </div>

    </>
  )
}

export default Header