import { createSlice } from "@reduxjs/toolkit";
import { ApplicationData } from '../component/ListOfApplication.js';
export const applicationSlice = createSlice({
    name: "applications",
    initialState: { value: ApplicationData },
    reducers: {
        addApplication: (state, action) => {
            window.confirm("send đơn thành công !!")
            state.value.push(action.payload)
            console.log(action.payload)
        },
        deleteApplication: (state, action) => {
            if(window.confirm("bạn có chắc muốn xóa đơn ?")) {
               state.value = state.value.filter((application) => application.id !== action.payload.id)
            }
       },
   }
});

export default applicationSlice.reducer;
export const { addApplication, deleteApplication } = applicationSlice.actions;