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
    }
}
export const ProfileAPI = {
    getStatus (userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {
            status
        })
    },

    getProfileData (userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateProfileData (data) {
        return instance.put(`profile`, data)
    }
    ,getPosts (page) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
    },
    saveMainPhoto (photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type' : 'multipatr/form-data'
            }
        })
    }
}
export const AuthAPI = {

    authUser () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    authLogin (email, password, rememberMe, captcha = null) {
        return instance.post(`auth/login`, {
            email, password, rememberMe, captcha
        })
    },
    Logout () {
        return instance.delete(`auth/login`)
    }
}
export const SecurityAPI = {
    getCaptcha () {
        return instance.get(`security/get-captcha-url`)

    }
}
