import * as axios from "axios";

const instace = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '42ada78a-68af-4959-975c-6cdcc2441ad1'
    }
})

export const UserAPI = {
    getUsers (page, countOnPage) {
        return instace.get(`users?page= ${page}&count=${countOnPage}`)
            .then(response => {
                return response.data
            })
    },
    followOnUser (userId) {
        return instace.post(`follow/` + userId)
            .then(response => {
                return response.data
            })
    },
    unfollowOnUser (userId) {
        return instace.delete(`follow/` + userId)
            .then(response => {
                return response.data
            })
    },
    authUser () {
        return instace.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfileData (userId) {
        return instace.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}
