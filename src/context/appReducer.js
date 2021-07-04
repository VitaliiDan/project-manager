import {FETCH_USERS, SHOW_LOADER} from "./types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [FETCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    DEFAULT: state => state
}

export const appReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}