import React from 'react'

function Forget() {
  return (
    <div>
    <div className='A'>
        <img style={{height:"660px",width:"1354px"}} src="bigimg.jpg" alt="" />
        <div>
          <div className='B'>
          <div className='C'>
          <h1 style={{color:"red"}}> Forget password</h1><br/><br/>
            <label style={{marginLeft:"-175px"}}>enter your email</label><br/>
            <input className='D' type="email"placeholder='useremail'/>
          </div><br/><br/>
          {/* <div>
            <label style={{marginLeft:"-150px",marginTop:"15px"}}>enter your password</label><br/>
            <input className='D' type="password"placeholder='password'/>
          </div><br/><br/> */}
          <button style={{background:"blue", color:"white"}} className='D'>get otp</button><br/><br/>
          {/* <input  style={{marginLeft:"-15px",marginTop:"15px"}} type="radio" />remainder me */}
          {/* <img style={{height:"25px",marginLeft:"50px" ,borderRadius:"50px"}} src="lock.jpg" alt="" /> */}
          {/* <a style={{marginLeft:"5px"}} href="">Forgetpassword</a> */}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Forget

