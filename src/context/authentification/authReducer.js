import { AUTH_SUCCESS } from "../types";
import { AUTH_LOGOUT } from './../types';


export const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            }
        default: 
            return state
    }
}