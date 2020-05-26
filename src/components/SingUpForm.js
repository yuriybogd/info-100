import React from "react"
import { Formik } from "formik"
import * as yup from "yup"
import { Form, Button } from "react-bootstrap"
import "./SingUpForm.scss"
import Axios from "axios"
import { NavLink } from "react-router-dom"

const singUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

const singInUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="

const APIKey = "AIzaSyBFk9wJ3MK9GJrHetTKNyRvJ_e1fYnV0hs"

export const SingUpForm = () => {
  const validationSchema = yup.object({
    firstName: yup.string().required("Поле обязательно к заполнению"),
    secondName: yup.string().required("Поле обязательно к заполнению"),
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
      firstName: values.firstName,
      secondName: values.secondName,
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
        firstName: "",
        secondName: "",
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
          <Form.Group controlId="firstName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="secondName">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              name="secondName"
              value={values.secondName}
              onChange={handleChange}
              isValid={touched.secondName && !errors.secondName}
              isInvalid={!!errors.secondName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.secondName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Почта</Form.Label>
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
            Уже зарагестрированы?
            <NavLink to="/admin/singUp">Войти</NavLink>
          </Form.Text>

          <Button type="submit">Зарегестрироваться</Button>
        </Form>
      )}
    </Formik>
  )
}
