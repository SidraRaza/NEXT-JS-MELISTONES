import React from 'react'
import './Footer.css'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <p>All Rights Reserved © 2023</p>
        <p>Created by Sidra Raza <FaHeart className='heart'  /></p>
    </div>
  )
}

export default Footer