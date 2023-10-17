import React, { useEffect, useState } from 'react'

function Countnumber() {
    const [Count,setCount]=useState(0);
    const [Calculate,setCalculate]=useState(0);
    useEffect(() =>{
        setCalculate(()=>Count*2);
    },
    [Count]
    )
  return (
    <div>
    <p>
        Count:{Count}
    </p>
    <button onClick={()=>setCount((c)=>c+1)}>+</button>
    <p>
        Calculate:{Calculate}
    </p>
    </div>
  );
}

export default Countnumber
