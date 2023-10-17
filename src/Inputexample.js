import React, { useState } from 'react'

function Inputexample() {
    // create function to hold the variabel value
    const [inputvalue,setinputvalue]=useState('')
    const [inputpassword,setinputpassword]=useState('')
    console.log(inputvalue)
    // create a function to handel the changes in input
    const changeInput=(e)=>{
        setinputvalue(e.target.value);
    };
    const changepassword=(e)=>{
        setinputpassword(e.target.value);
    };
  return (
    <div>
      <label>full name</label>
      <input type='text'placeholder='full name'value={inputvalue}onChange={changeInput}/>
      
     output:<p>{inputvalue}</p>
     <label>password</label>
      <input type='password'value={inputpassword}onChange={changepassword}/>
     output:<p>{inputpassword}</p>

    </div>
  );
}

export default Inputexample
