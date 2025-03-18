import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
    menuTitle: string;
}

const initialState: HeaderState = {
    menuTitle: 'Email Accounts',
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.menuTitle = action.payload;
        },
    },
});

export const { setTitle } = headerSlice.actions;
export default headerSlice.reducer;
