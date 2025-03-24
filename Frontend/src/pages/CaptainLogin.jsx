import React from 'react'
import {Link} from "react-router-dom";
import {useState} from 'react'

const CaptainLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [captainData, setcaptainData] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault();
    setcaptainData({
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
    <img className='w-20 mb-2' src="https://th.bing.com/th/id/OIP.qpueP-cG80o_Bs6TvvPB2AHaEH?rs=1&pid=ImgDetMain"  alt="" />
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
      <p className='text-center '> Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
    </div>
    <div>
      <Link 
      to='/login'
      className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base '>Sign in as User</Link>
    </div>
</div>
  )
  
}
export default CaptainLogin
