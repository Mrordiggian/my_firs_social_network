export const getUsers = (state) => {
    return state.FindFriends.users
}
export const getCurrentPage = (state) => {
    return state.FindFriends.currentPage
}
export const totalCountPage = (state) => {
    return state.FindFriends.totalCountPage
}
export const getCountOnPage = (state) => {
    return state.FindFriends.countOnPage
}
export const getIsFetching = (state) => {
    return state.FindFriends.isFetching
}
export const getInProgress = (state) => {
    return state.common.inProgress
}