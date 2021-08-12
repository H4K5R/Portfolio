import {configureStore} from "@reduxjs/toolkit";
import UISlice from "./UI-slice";

const store = configureStore({
    reducer: {
        uiReducer:UISlice.reducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;