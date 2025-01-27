import { User, UserContact } from '@/interfaces/user'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface StateUserContact {
    user: User
    userContact: UserContact
    updateUser: (newUser: User) => void
    updateUserContact: (newUserContact: UserContact) => void,
    showUser: () => User,
    showUserContact: () => UserContact
    showUserName: () => string
    showUserEmail: () => string
}

export const useUserContact =  create<StateUserContact>()(devtools(persist((set, get) => {
    return {
        user: {
            name: '',
            email: '',
            phone: ''
        },
        userContact: {
            user: { 
                name: '',
                email: '',
                phone: ''
            } as User,
            message: ''
        },
        updateUser(newUser: User) {
            set({ user: newUser }, false, 'UPDATE_USER')
        },
        updateUserContact(newUserContact: UserContact) {
            set({ userContact: newUserContact }, false, 'UPDATE_USER_CONTACT')
        },
        showUser() {
            return get().user
        },
        showUserContact() {
            return get().userContact
        },
        showUserName() {
            return get().user.name
        },
        showUserEmail() {
            return get().user.email
        },
    }
}, {
    name: 'userContact'
})))