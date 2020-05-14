import { SHOW_LOADER, ADD_STATEMENT, FETCH_STATEMENTS } from "../types"


const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_STATEMENT]: (state, { payload }) => ({
    ...state,
    statements: [...state.statements, payload],
  }),
  [FETCH_STATEMENTS]: (state, { payload }) => ({
    ...state,
    statements: payload,
    loading: false,
  }),
  DEFAULT: (state) => state,
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
