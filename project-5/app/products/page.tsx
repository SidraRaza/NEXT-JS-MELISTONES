import Footer from '@/components/Footer'
import HeaderMain from '@/components/HeaderMain'
import HeaderTop from '@/components/HeaderTop'
import Hero from '@/components/Hero (2)'
import Navbar from '@/components/Navbar'
import NewProducts from '@/components/NewProducts'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
         <HeaderTop/>
         <HeaderMain/>
         <Hero/>
          <NewProducts/>
          <br />
          
      <Footer/>
         
    </div>
   
  )
}

export default page