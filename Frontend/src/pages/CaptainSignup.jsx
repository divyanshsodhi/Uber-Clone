import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [userData, setuserData] = useState({})
  const submitHandler=(e)=>{
    
    e.preventDefault();
    setuserData({
     
       fullName:{
          firstName:firstName,
          lastName:lastName
        },
        password:password,
        email:email
      })
    
    console.log(userData.username);
    setfirstName('');
    setlastName('');
    setemail('');
    setpassword('');
  }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>

            <h3 className='text-lg font-medium mb-2'>What's our Captain's Name</h3>
            <div className='flex gap-4 mb-5'>
              <input
                required

                className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2  text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e)=>{
                  setfirstName(e.target.value);
                }}
              />

              <input
                required

                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e)=>{
                  setlastName(e.target.value)
                  }
              }
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's our Captain's Email</h3>
            <input
              required

              className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
              value={email}
              onChange={(e)=>{
                setemail(e.target.value);
              }}
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-base'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value);
              }}
            />
            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base '>Create Account</button>
          </form>
          <p className='text-center '>Already a Captain? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
         <p className='text-[15px] leading-tight'>By proceeding, you consent to get calls, Whatsapp or SMS messages including by automated means, from Uber and the affiliates to the number provided</p>
        </div>
      </div>
    </div>
  )
}


export default CaptainSignup
