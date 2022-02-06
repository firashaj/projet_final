import { LOGIN_IN, LOG_OUT } from "../Types"

const initState = {
    user: null,
    isAuth: false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_IN:
           
            localStorage.setItem('user', action.payload)
            return { ...state, user: action.payload, isAuth: true }
        case LOG_OUT :
            localStorage.clear()
            return {...state,user:null}
        default: return state
    }
}
export default AuthReducer