import React, { useEffect, useState } from 'react'

export default function UseEffectEx() {
    // const [num,setNum] = useState(0);
    useEffect(()=>{
    alert('I am clicked')
        
    });
  return (
    <div>
        {/* <button onClick={(()=>{
                setNum(num+1);
            })
        }>Click me{num}</button> */}
    </div>
  )
}
