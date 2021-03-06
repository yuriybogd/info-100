import React, { useState } from "react"
import { Form, FormControl, Button } from "react-bootstrap"
import "./FormStatement.scss"
import { useContext } from "react"
import { FirebaseContext } from "./../context/firebase/firebaseContext"
import { ProgressBar } from "./ProgressBar/ProgressBar"
import { ResultMsg } from "./ResultMsg"

export const FormStatement = () => {
  const [percent, setPercent] = useState(0)
  const [value, setValue] = useState("")
  const [barState, setBarState] = useState({ isSubmitted: false })
  const [msgState, setMsgState] = useState({ isShown: false })
  const firebase = useContext(FirebaseContext)

  const onChangeHandle = (e) => {
    setValue(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()

    // TODO:
    // Настроить функции проверски значени
    // Настроить анимацию, как будто вопрос проверяется
    // Настроить функцию результата отправки

    if (value.trim()) {
      let curPercent = Math.floor(Math.random() * Math.floor(100))
      setPercent(curPercent)
      console.log("percent = ", curPercent)

      firebase.addStatement(value.trim(), curPercent)
      setBarState({ isSubmitted: true })
      setTimeout(() => {
        setMsgState({ isShown: true })
      }, 4000)
    }

    setMsgState({ isShown: false })
    setValue("")
  }

  return (
      <Form className="FormStatement bounce-in-left" onSubmit={submitHandle}>
        <h5 className="input-text">Введите инфу для проверки</h5>

          <FormControl
            id="question-input"
            placeholder="Введите инфу..."
            aria-label="Enter checking info"
            aria-describedby="basic-addon2"
            value={value}
            onChange={onChangeHandle}
          />

          <Button type="submit">
            <div></div>
          </Button>

        {barState.isSubmitted ? <ProgressBar percent={percent} /> : null}
        {msgState.isShown ? (
          <ResultMsg msg={"Вот это результат!"} />
        ) : null}
      </Form>
  )
}
