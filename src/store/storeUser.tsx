import { User } from '@/interfaces/user'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface StateUser {
    user: User
    updateUser: (newUser: User) => void
    showUser: () => User,
    showUserName: () => string
    showUserEmail: () => string
    clearUser: () => void
}

export const storeUser =  create<StateUser>()(devtools(persist((set, get) => {
    return {
        user: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        updateUser(newUser: User) {
            set({ user: newUser }, false, 'UPDATE_USER')
        },
        showUser() {
            return get().user
        },
        showUserName() {
            return get().user.name
        },
        showUserEmail() {
            return get().user.email
        },
        clearUser() {
            set({
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                },
            }, false, 'CLEAR_USER')
        },
    }
}, {
    name: 'storeUser'
})))