import { createSlice } from '@reduxjs/toolkit'

const initialState = {
toggle: false,
user: "" || null
}

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeToggleToTrue: (state: any) =>{
        state.toggle = true
    },
    changeToggleToFalse: (state: any) =>{
        state.toggle = false
    },
    signUserGlobal: (state: any, {payload}: any) =>{
        state.user = payload
    },
    logOut: (state: any) =>{
        state.user = null
    }
  }
});

export const {changeToggleToFalse, changeToggleToTrue, signUserGlobal, logOut} = GlobalState.actions

export default GlobalState.reducer