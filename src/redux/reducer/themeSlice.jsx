import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface DarkmodeState {
  isDarkmode: boolean
}

const initialState: DarkmodeState = {
  isDarkmode : false
}

export const themeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.isDarkmode = !state.isDarkmode;
    }
  },
})

export const { toggleDarkmode } = themeSlice.actions
export const mode = (state: RootState) => state.appData.isDarkmode
export default themeSlice.reducer