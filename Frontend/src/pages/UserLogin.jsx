import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const UserLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    console.log(userData)
    setemail('');
    setpassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
          required 
          value={email} 
          onChange={(e)=>{
              setemail(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base '
          type="email"
          placeholder='email@example.com'
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value);
        }}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base '
          type="password"
          placeholder='Password'
        />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base '>Login</button>
      </form>
          <p className='text-center '>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
          <Link 
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin
