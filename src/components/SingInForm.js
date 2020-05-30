import React, { useContext } from "react"
import { Formik } from "formik"
import * as yup from "yup"
import { Form, Button } from "react-bootstrap"
import "./SingInForm.scss"
import { AuthContext } from "./../context/authentification/authContext"

export const SingInForm = () => {
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

  const singInHandle = (values) => {
      authentication(values.email, values.password, true)
      .catch((e) => console.error(e))
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={singInHandle}
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

          <Button type="submit" className="btn-singIn">
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  )
}
