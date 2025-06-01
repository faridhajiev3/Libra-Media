import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    cardNumber: "",
    cardVerification: "",
    cardTime: "",
};


const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setPayment: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        submitPayment: (state) => {
            console.log("Payment Data:", current(state));
        },
    }
})

export const {setPayment, submitPayment} = paymentSlice.actions
export default paymentSlice.reducer
