 import React from 'react'
import {Link} from 'react-router-dom' 
 const Home = () => {
   return (
     <div>
       <div className='bg-[url(https://th.bing.com/th/id/R.61a7a05cb18222277b5c2e5f1cc89e14?rik=eh3hXmlb%2bCt%2fDQ&riu=http%3a%2f%2fcontent.wgrz.com%2fphoto%2f2016%2f06%2f23%2ftraffic_signal_1466716721913_3350942_ver1.0.jpg&ehk=ca%2blGgenk4xBMVImOQcGGlh%2bU9RR%2fSf9VwozfjoELLY%3d&risl=&pid=ImgRaw&r=0)] h-screen pt-8 bg-center bg-cover flex justify-between flex-col '>
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
 