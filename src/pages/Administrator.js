import React, { useState } from "react"
import "./Administrator.scss"
import { SingInForm } from './../components/SingInForm';
import { SingUpForm } from './../components/SingUpForm';


export const Administrator = () => {
const [state, setstate] = useState({toggle: true})
 
  const changeToggle = () => {
    setstate({toggle: !state.toggle})
    console.log(state);
    
  }
  
  return (
    <div className="Administrator bounce-in-left">
      <button onClick={changeToggle}>Change toggle</button>
      {state.toggle ? <SingInForm/> : <SingUpForm/> }
    </div>
  )
}
