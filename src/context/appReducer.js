import {
    CLEAR_ORG_INFO,
    CLEAR_PROJECT_INFO, CLEAR_STATE,
    CLEAR_TEAMLIDER_INFO, FETCH_FOLLOWERS, FETCH_ORGS,
    FETCH_PROJECTS,
    FETCH_USERS,
    PAGE_DECREMENT,
    PAGE_INCREMENT, SET_FOLLOWERS,
    SET_LIDER, SET_ORG, SET_PROJECT,
    SHOW_LOADER
} from "./types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [FETCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [FETCH_PROJECTS]: (state, {payload}) => ({...state, projects: payload, loading: false}),
    [FETCH_FOLLOWERS]: (state, {payload}) => ({...state, followers: payload, loading: false}),
    [FETCH_ORGS]: (state, {payload}) => ({...state, orgs: payload, loading: false}),
    [SET_LIDER]: (state, {payload}) => ({...state, teamLider: payload}),
    [SET_PROJECT]: (state, {payload}) => ({...state, project: payload}),
    [SET_ORG]: (state, {payload}) => ({...state, projectOrg: payload}),
    [SET_FOLLOWERS]: (state, {payload}) => ({...state, projectFollowers: payload}),
    [PAGE_INCREMENT]: (state, {payload}) => ({...state, page: payload}),
    [PAGE_DECREMENT]: (state, {payload}) => ({...state, page: payload}),
    [CLEAR_TEAMLIDER_INFO]: state => ({...state, teamLider: {login: '', avatar: '', id: ''}, projects: [], followers: [], org: []}),
    [CLEAR_PROJECT_INFO]: state => ({...state, project: ''}),
    [CLEAR_ORG_INFO]: state => ({...state, projectOrg: ''}),
    [CLEAR_STATE]: (state) => ({
        ...state,
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
    }),
    DEFAULT: state => state
}

export const appReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}