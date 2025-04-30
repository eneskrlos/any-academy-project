import { TouchedForm } from '@/utils/types'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface StateTouchedForm {
    touched: TouchedForm
    updateTouched: (newError: TouchedForm) => void
    showTouched: () => TouchedForm,
    clearTouched: () => void
}

export const storeTouched =  create<StateTouchedForm>()(devtools(persist((set, get) => {
    return {
        touched: {
            name: false,
            email: false,
            phone: false,
            message: false
        },
        updateTouched(newTouched: TouchedForm) {
            set({ touched: newTouched }, false, 'UPDATE_TOUCHED')
        },
        showTouched() {
            return get().touched
        },
        clearTouched() {
            set({
                touched: {
                    name: false,
                    email: false,
                    phone: false,
                    message: false
                },
            }, false, 'CLEAR_TOUCHED')
        },
    }
}, {
    name: 'storeTouchedFrom'
})))