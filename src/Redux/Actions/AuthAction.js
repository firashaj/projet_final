import { LOGIN_IN, LOG_OUT } from "../Types"
export const login = (user) => {
    return { type: LOGIN_IN, payload: user }
}
export const logout = () => {
    return { type: LOG_OUT }
}
