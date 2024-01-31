import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

export const stare = configureStore({
    reducer: {
        userAuth: authSlice
    },
})