import React from 'react'
import { useState } from 'react';

export default function AddColor() {
    const initial_list=["pink"]
    const[colorList,setColorList]=useState(initial_list)
    const [color,setColor]=useState('pink');
    const styles={
      backgroundColor:color,
    }
  return (
    <div>
      <input 
        value={color}
        style={styles} 
        placeholder='Enter Color' 
        onChange={(event)=>{setColor(event.target.value)}}
        />
        <button onClick={()=>{setColorList([...colorList,color])}}>AddColor</button>
        {colorList.map((clr,index)=><ColorBox key={index} color={clr} />)}
  
      {/* <ColorBox/>
      <ColorBox/>
      <ColorBox/> */}
    </div>
  )
}


  function ColorBox({color}){
    const styles={
      backgroundColor:color,
      height:'20px',
      width:'175px ',
      marginTop:"10px",
      marginLeft:"25px"
    }
    return     <div style={styles}></div>
  }


//   export default AddColor;