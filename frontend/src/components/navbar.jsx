import { Link } from 'react-router-dom'
import React from 'react'



export default function NavigationBar() {
  return (
    <div className='navbar'>
      <Link to='/' className='active'>Home</Link>
      <Link to='/writer'>Magic Writer</Link>
      <Link to='/authentication'>Authentication</Link>
    </div>
  )
}