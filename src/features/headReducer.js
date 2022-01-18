import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    heads: [ "home", "explore", "notifications", "messages" ]
}

const pathSlice = createSlice({
    name: "head",
    initialState,
    reducers: {}
})

export const selectHeads = state => state.head.heads

export default pathSlice.reducer