import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data ,setdata]=useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setdata(data));
    },[]);
  return (
    <div>
    {
      data && data.map(
        (item)=>{
            console.log("my output is here",item)
            return <p key="item.id">
            {item.title},{item.id},{item.compleated}

            </p>
        }
      )
    }
    </div>
  )
}

export default Fetch
