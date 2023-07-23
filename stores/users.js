import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {
            isAuthenticated: true,
            email: null,
            token: null,
            role: 'admin',
        },
    }),
    actions: {
        initStore() {
            this.user.isAuthenticated = false

            if (localStorage.getItem('user.token')) {
                this.user.role = localStorage.getItem('user.role')
                this.user.token = localStorage.getItem('user.token')
                this.user.email = localStorage.getItem('user.email')
                this.user.isAuthenticated = true
                
                console.log("Initialised user: ", this.user)
            }
        },
        setToken(token, email) {
            console.log("Setting token: ", token, email)

            this.user.role = role
            this.user.token = token
            this.user.email = email
            this.user.isAuthenticated = true

            localStorage.setItem('user.role', role)
            localStorage.setItem('user.token', token)
            localStorage.setItem('user.email', email)
        },
        removeToken() {
            console.log("Removing token")

            this.user.role = null
            this.user.token = null
            this.user.email = null
            this.user.isAuthenticated = false

            localStorage.setItem('user.role', null)
            localStorage.setItem('user.token', null)
            localStorage.setItem('user.email', null)
        },
    },
})