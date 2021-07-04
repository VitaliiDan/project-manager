import React, {useReducer} from "react";
import axios from "axios";
import {AppContext} from "./appContext";
import {appReducer} from "./appReducer";

import {FETCH_USERS, SHOW_LOADER} from "./types";

const usersUrl = `https://api.github.com/users`;

export const AppState = ({children}) => {

    const initialState = {
        users: [],
        loading: false,
        page: 1,
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchUsers = async () => {
        showLoader();
        const res = await axios.get(usersUrl);
        const payload = Object.keys(res.data).map(key => {
            return {
                id: res.data[key].id,
                login: res.data[key].login,
                avatar: res.data[key].avatar_url
            }
        })
        dispatch({type: FETCH_USERS, payload});
    }

    return (
        <AppContext.Provider value={{
            fetchUsers, showLoader,
            state : state
        }}>
            {children}
        </AppContext.Provider>
    )
}