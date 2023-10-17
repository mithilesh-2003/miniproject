import React from 'react'

function Signup() {
  return (
    <div>
    <div className='A'>
        <img style={{height:"660px",width:"1354px"}} src="bigimg.jpg" alt="" />
        <div>
          <div className='B'>
          <div className='C'>
          <h1 style={{color:"red"}}> User Signup</h1><br/>
            <label style={{marginLeft:"-150px"}}>enter your className</label><br/>
            <input className='D' type="usernameS"placeholder='userename'/>
          </div>
          <div>
            <label style={{marginLeft:"-180px",marginTop:"15px"}}>enter your email</label><br/>
            <input className='D' type="email"placeholder='useremail'/>
          </div>
          <div>
            <label style={{marginLeft:"-175px",marginTop:"15px"}}>enter your contact</label><br/>
            <input className='D' type="number"placeholder='contact no'/>
          </div>
          <div>
            <label style={{marginLeft:"-160px",marginTop:"15px"}}>enter your password</label><br/>
            <input className='D' type="password"placeholder='password'/>
          </div><br/><br/>
          <button style={{background:"blue", color:"white"}} className='D'>Signup</button><br/><br/>
          {/* <input  style={{marginLeft:"-15px",marginTop:"15px"}} type="radio" />remainder me */}
          {/* <img style={{height:"25px",marginLeft:"50px" ,borderRadius:"50px"}} src="lock.jpg" alt="" /> */}
          {/* <a style={{marginLeft:"5px"}} href="">Forgetpassword</a> */}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Signup

