import { Link } from 'react-router-dom'
import React from 'react'



export default function NavigationBar() {
  return (
    <div className='navbar'>
      <Link to='/' className='home-link'>Home</Link>
      <Link to='/writer' className='writer-link'>Magic Writer</Link>
      <Link to='/authentication' className='authentication-link'>Authentication</Link>
    </div>
  )
}