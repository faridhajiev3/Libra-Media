import { createSlice, current } from "@reduxjs/toolkit"; 

const initialState = {
    fullName: "",
    phoneNumber: "",
    city: "",
    address: "",
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddressField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        submitAddress: (state) => {
            console.log("Address Data:", current(state));
        },
    },
});

export const { setAddressField, submitAddress } = addressSlice.actions;
export default addressSlice.reducer;