

export const selectProfileInfo = (state) => {
    return state.ProfilePage.profileInfo
}
export const selectProfilePosts = (state) => {
    return state.ProfilePage.posts
}
export const selectProfileStatus = (state) => {
    return state.ProfilePage.status
}
export const selectProfileIsOwner = (state) => {
    return state.ProfilePage.isOwner
}
export const selectProfilePhotoSmall = (state) => {
    return state.ProfilePage.profileInfo.photos.small
}
export const selectProfileFullName = (state) => {
    return state.ProfilePage.profileInfo.fullName
}


