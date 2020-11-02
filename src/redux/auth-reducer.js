import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'auth/set-user-data'
const GET_CAPTCHA_URL_SUCCESS = 'auth/get=captcha-url-success'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
            case GET_CAPTCHA_URL_SUCCESS:
                return {
                    ...state,
                    ...action.payload
                }
        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0)
        dispatch(setUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))

}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        debugger
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0)
            dispatch(getAuthUserData())
        else {
            if (response.data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            let messageError = response.data.messages.length ? response.data.messages[0] : "Sending error"
            dispatch(stopSubmit('login', { _error: messageError }))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0)
            dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer 