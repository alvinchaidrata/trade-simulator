import { configureStore } from "@reduxjs/toolkit";
import saveReducer from "./slices/save-slice";

export const store = configureStore({
    reducer: {
        saveReducer,
    },
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
