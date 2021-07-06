import React, {useReducer} from "react";
import axios from "axios";
import {AppContext} from "./appContext";
import {appReducer} from "./appReducer";

import {
    CLEAR_ORG_INFO,
    CLEAR_PROJECT_INFO,
    CLEAR_TEAMLIDER_INFO, FETCH_FOLLOWERS, FETCH_ORGS,
    FETCH_PROJECTS,
    FETCH_USERS,
    PAGE_DECREMENT,
    PAGE_INCREMENT, SET_FOLLOWERS,
    SET_LIDER, SET_ORG, SET_PROJECT,
    SHOW_LOADER
} from "./types";

const usersUrl = `https://api.github.com/users`;

export const AppState = ({children}) => {

    const initialState = {
        users: [],
        projects: [],
        followers: [],
        orgs: [],
        loading: false,
        page: 1,
        teamLider: {
            login: '',
            avatar: '',
            id: ''
        },
        project: '',
        projectFollowers: [],
        projectOrg: ''
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    // useEffect(() => {
    //     console.log(state.teamLider);
    //     console.log(state.project);
    //     console.log(state.projectFollowers);
    //     console.log(state.projectOrg);
    // }, [state])

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

    const fetchProjects = async (user) => {
        showLoader();
        const res = await axios.get(`${usersUrl}/${user.login}/repos`);
        const payload = Object.keys(res.data).map(key => {
            return {
                id: res.data[key].id,
                name: res.data[key].name
            }
        })
        dispatch({type: FETCH_PROJECTS, payload});
    }

    const fetchFollowers = async (user) => {
        showLoader();
        const res = await axios.get(`${usersUrl}/${user.login}/followers`);
        const payload = Object.keys(res.data).map(key => {
            return {
                id: res.data[key].id,
                login: res.data[key].login,
                avatar: res.data[key].avatar_url
            }
        })
        dispatch({type: FETCH_FOLLOWERS, payload});
    }

    const fetchOrgs = async (user) => {
        showLoader();
        const res = await axios.get(`${usersUrl}/${user.login}/orgs`);
        const payload = Object.keys(res.data).map(key => {
            return {
                id: res.data[key].id,
                login: res.data[key].login
            }
        })
        dispatch({type: FETCH_ORGS, payload});
    }

    const setTeamLider = (user) => {
        const payload = {
            login: user.login,
            avatar: user.avatar,
            id: user.id
        }
        dispatch({type: SET_LIDER, payload});
    }

    const clearTeamLeaderInfo = () => dispatch({type: CLEAR_TEAMLIDER_INFO});
    const clearProjectInfo = () => dispatch({type: CLEAR_PROJECT_INFO});
    const clearProjectOrg = () => dispatch({type: CLEAR_ORG_INFO});

    const setProject = (project) => {
        const payload = {
            name: project.name,
            id: project.id
        }
        dispatch({type: SET_PROJECT, payload})
    }

    const setProjectOrg = (value) => {
        const payload = value;
        dispatch({type: SET_ORG, payload})
    }

    const setProjectFollowers = (value) => {
        const payload = value.filter(el => el.checked).map(el => {
            return {login: el.login, id: el.id, avatar: el.avatar}
        });
        dispatch({type: SET_FOLLOWERS, payload})
    }

    const pageIncrement = () => {
        const payload = state.page < 4 ? state.page + 1 : state.page;
        dispatch({type: PAGE_INCREMENT, payload})
    }

    const pageDecrement = () => {
        const payload = state.page > 1 ? state.page - 1 : state.page;
        dispatch({type: PAGE_DECREMENT, payload})
    }

    return (
        <AppContext.Provider value={{
            fetchUsers, fetchProjects, fetchFollowers, fetchOrgs,
            showLoader,
            setTeamLider, clearTeamLeaderInfo,
            setProject, clearProjectInfo,
            setProjectOrg, clearProjectOrg,
            setProjectFollowers,
            pageIncrement, pageDecrement,
            state: state
        }}>
            {children}
        </AppContext.Provider>
    )
}