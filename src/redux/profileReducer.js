import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you?" },
        { id: 1, message: "It's my first post" },
    ],
    newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 3, message: state.newPostText }],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const onChangePostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        if(!userId){
            dispatch(setUserProfile({photos: {large: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"}}))
        }
        else{
            usersAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data))
            })
        } 
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) =>{
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer