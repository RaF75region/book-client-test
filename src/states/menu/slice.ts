import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';

export interface ITypeAccount{
    isSwitch: boolean,
}

const initialState: ITypeAccount = {
    isSwitch: false
}


export const typeAccountSlice = createSlice({
    name: 'typeAccount',
    initialState,
    reducers: {
        handleSwitch: (state,action:PayloadAction<boolean>) => {
            state.isSwitch = action.payload;
        }
    },
})

export const { handleSwitch } = typeAccountSlice.actions
export const selectValues = (state: RootState) => state.typeAccount
export default typeAccountSlice.reducer