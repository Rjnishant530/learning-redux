import { createSlice } from "@reduxjs/toolkit";

var id = 0;

const employeeSlice = createSlice({
    initialState:[],
    name: "employee",
    reducers: {
        addEmployee: (state, { type, payload }) => {
            state.push({
                id: ++id,
                name: payload.name
            })
        },
        removeEmployee: (state, { type, payload }) => {
            return state.filter((employee) => employee.id !== payload.id);
        },
    }
})

export const { addEmployee, removeEmployee }=employeeSlice.actions;
export default employeeSlice.reducer;