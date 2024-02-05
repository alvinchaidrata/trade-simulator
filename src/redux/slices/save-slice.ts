import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: SaveState;
};

type SaveState = {};

const initialState = {
    value: {} as SaveState,
} as InitialState;

export const save = createSlice({
    name: "save",
    initialState,
    reducers: {
        testFunc: (state, action: PayloadAction<string>) => {
            return {
                value: {},
            };
        },
    },
});

export const { testFunc } = save.actions;
export default save.reducer;
