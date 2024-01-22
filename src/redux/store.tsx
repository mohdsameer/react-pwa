import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from './reducer/applicationSlice'

export const store = configureStore({
  reducer: {
    appData: applicationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
