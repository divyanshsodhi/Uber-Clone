 import React from 'react'
import {Link} from 'react-router-dom' 
 const Home = () => {
   return (
     <div>
       <div className='bg-[url(public/images/HomeBackground.png)] h-screen pt-8 bg-center  bg-cover w-full flex justify-between flex-col bg-red-400'>
        <img className='w-16 m-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-xl mt-5'>Continue</Link>
            </div>
       </div>
     </div>
   )
 }
 
 export default Home
 