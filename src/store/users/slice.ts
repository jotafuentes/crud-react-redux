import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UserId = string


export interface User {
    name: string
    email: string
    github: string
}

export interface UserWithId extends User {
    id: UserId
}


const initialState: UserWithId[] = [
    {
        id: '1',
        name: 'Jose L Fuentes',
        email: 'joseluisfuentes17@gmail.com',
        github: 'jotafuentes',

    },
    {
        id: '2',
        name: 'Alejandra Moncaleano',
        email: 'alejandra@gmail.com',
        github: 'poteto',

    },
    {
        id: '3',
        name: 'Clara Fuentes',
        email: 'clarafuentes@gmail.com',
        github: 'OhMyGuus',

    },
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter((user) => user.id !== id)
        },
    }
})

export default usersSlice.reducer
export const { deleteUserById } = usersSlice.actions