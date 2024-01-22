import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: "data",
}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    ApplicationData: (state) => {
     const email = state.value
    },
    storeApplicationData: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { ApplicationData, storeApplicationData } = applicationSlice.actions

export const appData = (state: RootState) => state.appData.value

export default applicationSlice.reducer