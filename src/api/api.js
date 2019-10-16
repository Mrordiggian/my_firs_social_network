import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '42ada78a-68af-4959-975c-6cdcc2441ad1'
    }
})

export const UserAPI = {
    getUsers (page, countOnPage) {
        return instance.get(`users?page= ${page}&count=${countOnPage}`)
            .then(response => {
                return response.data
            })
    },
    followOnUser (userId) {
        return instance.post(`follow/` + userId)
            .then(response => {
                return response.data
            })
    },
    unfollowOnUser (userId) {

        return instance.delete(`follow/` + userId)
            .then(response => {
                return response.data
            })
    },
    authUser () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfileData (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}
