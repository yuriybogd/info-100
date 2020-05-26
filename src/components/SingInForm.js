import React from "react"
import { Formik, setNestedObjectValues } from "formik"
import * as yup from "yup"
import { Form, Button } from "react-bootstrap"
import "./SingInForm.scss"
import Axios from "axios"
import { NavLink } from "react-router-dom"

// from Firebase
const singUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
const singInUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
const APIKey = "AIzaSyBFk9wJ3MK9GJrHetTKNyRvJ_e1fYnV0hs"

export const SingInForm = () => {
  

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Неверный email адрес")
      .required("Поле обязательно к заполнению"),
    password: yup
      .string()
      .min(6, "Пароль не может быть короче 6-ти символа")
      .required("Поле обязательно к заполнению"),
  })

  const singUpHandle = async (values) => {
    const authData = {
      email: values.email,
      password: values.password,
      returnSecureToken: true,
    }

    try {
      const response = await Axios.post(`${singInUrl} + ${APIKey}`, authData)
      console.log(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={singUpHandle}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        submitForm,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="SingInForm">
          <Form.Group controlId="email">
            <Form.Label>Email адрес</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Text>
            Еще не регестрировались?
            <NavLink to="/admin/singUp">Зарегестрироваться</NavLink>
          </Form.Text>

          <Button type="submit">Войти</Button>
        </Form>
      )}
    </Formik>
  )
}
