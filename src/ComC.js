import React from 'react'
import {FirstName} from './App'
export default function ComC() {
     
    return (
    <div>
        <FirstName.Consumer>
            {(fname)=>{return(<h1>My name is {fname}</h1>)}}
        </FirstName.Consumer>
    </div>
  )
}
