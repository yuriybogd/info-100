import React, { useState } from "react"
import { InputGroup, Form, FormControl, Button } from "react-bootstrap"
import "./FormStatement.scss"

export const FormStatement = () => {
  const [value, setValue] = useState("")

  const onChangeHandle = (e) => {
    setValue(e.target.value)
    console.log(e.target.value);
  }

  const submitHandle = (e) => {
  e.preventDefault()
    console.log("this is your value", value);
    // TODO: 
    // Добавить отправку данных на сервер
    // Проверить валидацию на мат, плохие слова, придумать пасхалки
    

}

return (
    <div className="container-md">
      <Form className="FormStatement" onSubmit={submitHandle}>
        <h5 className="input-text">Введите инфу для проверки</h5>
        <InputGroup>
          <FormControl
            id="question-input"
            placeholder="Введите инфу..."
            aria-label="Enter cheking info"
            aria-describedby="basic-addon2"
            value={value}
            onChange={onChangeHandle}
          />
          <InputGroup.Append>
            <Button type="submit"  variant="outline-info">Проверить</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  )
}
