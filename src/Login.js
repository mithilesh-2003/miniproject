import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import React, { Component } from 'react';

function Login() {
  const [username ,setusername] =useState('')
  const [password ,setpassword]=useState('')
  const [error ,seterror]=useState('')
// use navigate
  const navigate=useNavigate('');
  const Login =()=>{
    if(username==='tr' && password==='1234'){
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome to the Dashboard!',
      });
      navigate('/Dashboard')
    }
    else{

      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Incorrect username or password. Please try again.',
      });
      seterror('invalid route')
    }
  }
  <pp>email:</pp>
  return (
    <div>
    <div className='A'>
        <img style={{height:"660px",width:"1354px"}} src="bigimg.jpg" alt="" />
        <div>
          <div className='B'>
          <div className='C'>
          <h1 style={{color:"red"}}> User Signin</h1><br/><br/>
            <label style={{marginLeft:"-175px"}}>enter your email</label><br/>
            <input className='D' type="email"placeholder='useremail'value={username}onChange={(e)=> setusername(e.target.value)}/>
            {error && <p style={{color:"red"}}>error</p>}
          </div>
          <div>
            <label style={{marginLeft:"-150px",marginTop:"15px"}}>enter your password</label><br/>
            <input className='D' type="password"placeholder='password'value={password}onChange={(e)=>setpassword(e.target.value)}/>
          </div><br/><br/>
          <button style={{background:"blue", color:"white"}} className='D' onClick={Login}>Login</button><br/><br/>
          <input  style={{marginLeft:"-15px",marginTop:"15px"}} type="radio" />remainder me
          <img style={{height:"25px",marginLeft:"50px" ,borderRadius:"50px"}} src="lock.jpg" alt="" />
          <a style={{marginLeft:"5px"}} href="">Forgetpassword</a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Login
