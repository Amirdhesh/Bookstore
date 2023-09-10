import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function SignUp({setSignin,setuserid}) {
  const [Type, setType] = useState('login');
  const [Loginmail, setLoginmail] = useState('');
  const [loginpassword, setloginpassword] = useState('');
  const [signupmail, setsignupmail] = useState('');
  const [signuppassword, setsignuppassword] = useState('');
  const [signupconfirmpassword, setsignupconfirmpassword] = useState('');
  const [invalid, setinvalid] = useState(false);
async function loginsubmit(event){
  event.preventDefault();
  
  const response = await axios.post("http://127.0.0.1:5000/login",{
    email:Loginmail,
    password:loginpassword,
  })
  console.log(response)
  if(response.data.status){
    setSignin(false)
    console.log(response)
    localStorage.setItem('Isloggedin', true)
    setuserid(response.data.userid)
  } 
else{
    setinvalid(true)
  }
}
async function signupsubmit(event){
  event.preventDefault();
  if (signuppassword===signupconfirmpassword){
  const response = await axios.post("http://127.0.0.1:5000/register",{
    email:signupmail,
    password:signuppassword,
  })
  if(response.data.status){
    setSignin(true)
    console.log(response)
    localStorage.setItem('Isloggedin', true)
    
    setuserid(response.data.userid)
  } 
}
else{
  setinvalid(true)
}
}

  return (
    <div>
      {(Type === "login") ?
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md '>
    <div className='flex flex-col rounded-md bg-[#EAE9E9] gap-5 w-[370px] py-5'>
    <div className='flex justify-between items-center px-5'>
      <div></div>
        <div className=' flex justify-center text-lg'>Login</div>
      <div className='' onClick={()=>setSignin(false)}>X</div>
      </div>
        <form action='/hiiiiii' className='flex flex-col justify-center items-center w-full'>
            <div className='flex justify-start w-full ml-8 mb-0'><label >Email</label></div>
            <input className='rounded-md w-11/12 mt-0 h-9 outline-none' type='text' onChange={(event)=>setLoginmail(event.target.value)}></input>
            <div className='flex justify-start w-full ml-8 mt-4  mb-0'><label className='m-0' >Password</label></div>
            <input className='rounded-md w-11/12 mt-0 h-9 outline-none' type='password' onChange={(event)=>setloginpassword(event.target.value)}></input>
            <div className='w-full flex justify-between'>
              {(invalid===true) ? <div className='text-red-600'>invalid</div>:<div></div>}
              <a href='/' className='text-blue-500'>Forget password?</a>
            </div>
            
            <button className='w-11/12 rounded-md bg-blue-500 mt-6 h-9' onClick={loginsubmit} >Login</button>
        </form>
        <div className='flex gap-1 justify-start ml-5'><div>Create new</div><div className='text-blue-500' onClick={()=>setType("Signin")}>account?</div></div>
    </div>    
</div>
:
<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md'>
    <div className='flex flex-col rounded-md bg-[#EAE9E9] gap-5 w-[370px] py-5'>
      <div className='flex justify-between items-center px-5'>
      <div></div>
        <div className=' flex justify-center text-lg'>SignUp</div>
      <div className='' onClick={()=>setSignin(false)}>X</div>
      </div>
        <form className='flex flex-col justify-center items-center w-full'>
            <div className='flex justify-start w-full ml-8 mb-0'><label>Email</label></div>
            <input className='rounded-md w-11/12 mt-0 h-9 outline-none' type='text' value={signupmail} onChange={(event)=>setsignupmail(event.target.value)}></input>
            <div className='flex justify-start w-full ml-8 mt-2 mb-0'><label className='m-0'>Password</label></div>
            <input className='rounded-md w-11/12 mt-0 h-9 outline-none' type='password' value={signuppassword} onChange={(event)=>setsignuppassword(event.target.value)}></input>
            <div className='flex justify-start w-full ml-8 mt-2 mb-0'><label>Confirm Password</label></div>
            <input className='rounded-md w-11/12 mt-0 h-9 outline-none' type='text' value={signupconfirmpassword} onChange={(event)=>setsignupconfirmpassword(event.target.value)}></input>
            <div className='flex gap-1 justify-start w-full ml-8 mb-0 mt-1'>
            <input className='rounded-md' type='checkbox'></input>
            
            <div>I agree to the terms and conditions</div>
            </div>
            {(invalid===true) && <div className='text-red-600'>invalid</div>}
            <button className='w-11/12 rounded-md bg-blue-500 mt-6 h-9' onClick={signupsubmit}>Subscribe</button>
        </form>
        <div className='flex gap-1 justify-start ml-5'><div>Already have an</div><div className='text-blue-500' onClick={()=>setType("login")}>account?</div></div>
    </div>
</div>}
</div>
  )
}

export default SignUp