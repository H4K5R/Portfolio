import {createSlice} from "@reduxjs/toolkit";
import {uiStateType} from "../projectTypes";
const initialState:uiStateType = {
    isSideMenuOpen:false
}
const UISlice = createSlice({
    name:'uiSlice',
    initialState: initialState,
    reducers:{
        openSideMenu (state) {
            state.isSideMenuOpen = true;
        },
        closeSideMenu (state) {
            state.isSideMenuOpen = false;
        }
    }
});
export default UISlice;
export const uiActions = UISlice.actions;