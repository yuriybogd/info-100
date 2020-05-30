import React, { useReducer } from "react"
import { firebaseReducer } from "./firebaseReducer"
import { SHOW_LOADER } from "../types"
import Axios from "axios"
import { FETCH_STATEMENTS, ADD_STATEMENT } from "./../types"
import { FirebaseContext } from "./firebaseContext"

const url = "https://info-100.firebaseio.com"

const dateTransform = () => {
  let date = new Date()

  let { mins, hours, day, month } = {
    mins: date.getMinutes(),
    hours: date.getHours(),
    day: date.getDate(),
    month: date.getMonth(),
  }

  if (mins < 10) {
    mins = "0" + mins
  }

  switch (month) {
    case 0:
      month = "Января"
      break
    case 1:
      month = "Февраля"
      break
    case 2:
      month = "Марта"
      break
    case 3:
      month = "Апреля"
      break
    case 4:
      month = "Мая"
      break
    case 5:
      month = "Июня"
      break
    case 6:
      month = "Июля"
      break
    case 7:
      month = "Августа"
      break
    case 8:
      month = "Сентября"
      break
    case 9:
      month = "Октября"
      break
    case 10:
      month = "Ноября"
      break
    case 11:
      month = "Декабря"
      break
    default:
      month = ""
  }

  const result = "в " + hours + ":" + mins + " от " + day + " " + month

  return result
}

export const FirebaseState = ({ children }) => {
  const initialState = {
    statements: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchStatements = async () => {
    showLoader()

    try {
      const response = await Axios.get(`${url}/statements.json`)

      const payload = Object.keys(response.data).map((key) => {
        return {
          ...response.data[key],
          id: key,
        }
      })

      dispatch({ type: FETCH_STATEMENTS, payload })
    } catch (e) {
      console.error(e)
    }
  }

  const addStatement = async (question, percent) => {
    const statement = {
      question,
      percent,
      date: dateTransform(),
    }

    try {
      const response = await Axios.post(`${url}/statements.json`, statement)

      const payload = {
        ...statement,
        id: response.data.name,
      }

      dispatch({ type: ADD_STATEMENT, payload })
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        fetchStatements,
        addStatement,
        loading: state.loading,
        statements: state.statements,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}
