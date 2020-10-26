import { usersAPI } from "../api/api"

const FOLLOW = 'users_reducer/follow'
const UNFOLLOW = 'users_reducer/unfollow'
const SET_USERS = 'users_reducer/set_users'
const SET_CURRENT_PAGE = 'users_reducer/set_current_page'
const SET_TOTAL_USERS_COUNT = 'users_reducer/setTotalUsersCount'
const TOGGE_IS_FETCHING = 'users_reducer/tooggleIsFetching'
const TOGGE_FOLLOWING_IN_PROGRESS = 'users_reducer/toggle-following-in-progress'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    portionSize: 20,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return { ...u, followed: true }
                    else
                        return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return { ...u, followed: false }
                    else
                        return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGE_FOLLOWING_IN_PROGRESS, isFetching, userId })

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const follow = (userId) => async (dispatch) => {

    followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), followSuccess)
    
    // dispatch(toggleFollowingProgress(true, userId))
    // let response = await usersAPI.postFollow(userId)
    
    // if (response.resultCode === 0) {
    //     dispatch(followSuccess(userId))
    // }
    // dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), unfollowSuccess)

    // dispatch(toggleFollowingProgress(true, userId))
    // let response = await usersAPI.deleteFollow(userId)

    // if (response.resultCode === 0) {
    //     dispatch(unfollowSuccess(userId))
    // }
    // dispatch(toggleFollowingProgress(false, userId))

}

export default usersReducer 