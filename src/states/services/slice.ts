import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux-app';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export interface IService{
    isService: string,
    isOpen: boolean
}

const initialState: IService = {
    isService: "",
    isOpen: false
}


export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setIdService: (state,action:PayloadAction<string>) => {
            state.isService = action.payload;
        },
        handlerOpened:(state,action:PayloadAction<boolean>)=>{
            console.log(action.payload)
            state.isOpen=action.payload;
        }
    },
})

export const { setIdService, handlerOpened } = serviceSlice.actions
export const selectValues = (state: RootState) => state.service
export default serviceSlice.reducer