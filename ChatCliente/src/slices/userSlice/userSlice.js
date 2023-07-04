import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'counter',
    initialState: {
        user: {},
        stateUser: "no-user",
        messageError: ""
    },
    reducers: {
        onCheckingUser: (state, { payload }) => {
            state.user = payload
            state.user = "user"
            state.messageError = ""
        },
        onLoadUser: (state, { payload }) => {
            state.user = payload
            state.user = "user"
            state.messageError = ""
        },

    },
})

// Action creators are generated for each case reducer function
export const { onCheckingUser, onLoadUser } = userSlice.actions