import React, { useReducer } from 'react'
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER } from '../types';
import Axios from 'axios';
import { FETCH_STATEMENTS, ADD_STATEMENT } from './../types';
import { FirebaseContext } from './firebaseContext';

const url = "https://info-100.firebaseio.com"

export const FirebaseState = ({ children }) => {
    const initialState = {
        statements: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    
    const fetchStatements = async () => {
        showLoader()

        const response = await Axios.get(`${url}/statements.json`)

        const payload = Object.keys(response.data).map(key => {
            return {
                ...response.data[key],
                id: key
            }
        })

        dispatch({ type: FETCH_STATEMENTS, payload })
    }

    const addStatement = async question => {
        const statement = {
            question, date: new Date().toJSON()
        }

        try {
            const response = await Axios.post(`${url}/statements.json`, statement)
            
            const payload = {
                ...statement,
                id: response.data.name
            }

            dispatch({type: ADD_STATEMENT, payload})
        } catch (e) {
            throw new Error(e.message)
        }
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchStatements, addStatement, 
            loading: state.loading,
            statements: state.statements
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
