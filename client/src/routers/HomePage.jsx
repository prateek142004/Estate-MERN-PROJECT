import React from 'react'
import '../style/homepage.scss'
import Searchbar from '../components/searchbar'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Homepage = () => {
    const {currentUser}=useContext(AuthContext)
    console.log(currentUser)
  return (
    <div className='homepage'>
     <div className="textcontainer">
        <div className='text'>
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p>Looking for your dream home, a perfect rental, or the best investment property? Estate makes the search effortless, seamless, and smarter than ever before. Whether you're a first-time buyer, an experienced investor, or just exploring options, we bring the best properties to your fingertips.</p>

            <Searchbar/>

            <div className='boxes'>
                <div className='box'>
                    <h1>16+</h1>
                    <h2>Years of experience</h2>
                </div>
                <div className='box'>
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className='box'>
                    <h1>16+</h1>
                    <h2>Property Ready</h2>
                </div>

            </div>
        </div>
     </div>
     <div className="imgcontainer">
        <img src="bg.png" alt="" />
     </div>
     </div>
  )
}

export default Homepage