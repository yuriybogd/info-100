import React, { useContext } from "react"
import { Formik } from "formik"
import * as yup from "yup"
import { Form, Button } from "react-bootstrap"
import "./SingUpForm.scss"
import { AuthContext } from './../context/authentification/authContext';

export const SingUpForm = () => {
const {authentication} = useContext(AuthContext)

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

  const singUpHandle = (values) => {

      authentication(values.email, values.password, false)
      .catch((e) => console.error(e))
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
        <Form noValidate onSubmit={handleSubmit} className="SingUpForm">
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

          <Button type="submit" className="btn-singUp">Регистрация</Button>
        </Form>
      )}
    </Formik>
  )
}
