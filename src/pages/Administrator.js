import React, { useState } from "react"
import "./Administrator.scss"
import { SingInForm } from "./../components/SingInForm"
import { SingUpForm } from "./../components/SingUpForm"

export const Administrator = () => {
  const [toggle, setToggle] = useState({ toggleForm: true })

  return (
    <div className="Administrator">
      {toggle ? <SingInForm /> : <SingUpForm />}
    </div>
  )
}
