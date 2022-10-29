import React, { useContext } from 'react'
import { FirstName } from './App'
import ComC from './ComC'
export default function ComB() {
    const fn=useContext(FirstName);
    return (
    <div>
        <p>{fn}</p>
      <ComC />
    </div>
  )
}
