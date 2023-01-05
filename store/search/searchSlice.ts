import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchSliceState {
    color: string;
    memory: string;
    model: string;
    number: string
}

const initialState: SearchSliceState = {
    color: '',
    memory: '',
    model: '',
    number: ''
}

export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        setMemory: (state, action: PayloadAction<string>) => {
            state.memory = action.payload
        },
        setModel: (state, action: PayloadAction<string>) => {
            state.model = action.payload
        },
        setNumber: (state, action: PayloadAction<string>) => {
            state.number = action.payload
        },
    }
})

export const { setColor, setMemory, setModel, setNumber } = SearchSlice.actions;
export default SearchSlice.reducer;
