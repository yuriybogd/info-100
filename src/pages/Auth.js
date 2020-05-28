import React, { useState, useEffect } from "react"
import "./Auth.scss"
import { SingInForm } from "./../components/SingInForm"
import { SingUpForm } from "./../components/SingUpForm"

export const Auth = () => {
  const [formProps, setFormProps] = useState({
    toggleForm: true,
    className: "Auth bounce-in-left",
  })

  const changeClass = (flag) => {
    if (flag) {
      return "Auth bounce-in-right"
    } else {
      return "Auth bounce-in-left"
    }
  }

  return (
    <div className={formProps.className}>
      <div className="auth-section">
        {formProps.toggleForm ? <SingInForm /> : <SingUpForm />}
        <button
          className="toggle-btn"
          onClick={() =>
            setFormProps({
              toggleForm: !formProps.toggleForm,
              className: changeClass(formProps.toggleForm),
            })
          }
        >
          {formProps.toggleForm ? "Перейти к регистрации" : "Войти в систему"}
        </button>
      </div>
    </div>
  )
}
