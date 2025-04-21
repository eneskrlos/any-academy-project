import { ErrorForm } from '@/utils/types'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface StateErrorForm {
    error: ErrorForm
    updateError: (newError: ErrorForm) => void
    showError: () => ErrorForm,
    showErrorName: () => string
    showErrorEmail: () => string
    clearError: () => void
}

export const storeError =  create<StateErrorForm>()(devtools(persist((set, get) => {
    return {
        error: {
            name: '',
            email: '',
            phone: '',
            message: '',
            genericError: ''
        },
        updateError(newError: ErrorForm) {
            set({ error: newError }, false, 'UPDATE_ERROR')
        },
        showError() {
            return get().error
        },
        showErrorName() {
            return get().error.name
        },
        showErrorEmail() {
            return get().error.email
        },
        showErrorPhone() {
            return get().error.phone
        },
        showErrorMessage() {
            return get().error.message
        },
        showErrorGeberic() {
            return get().error.genericError
        },

        clearError() {
            set({
                error: {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    genericError: ''
                },
            }, false, 'CLEAR_ERROR')
        },
    }
}, {
    name: 'storeErrorForm'
})))