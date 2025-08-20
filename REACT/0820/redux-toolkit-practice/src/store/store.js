import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "accountBook",
    initialState: {
        revenue: 0,
        items: [],
    },
    reducers: {
        expenditure: (state, action) => {
            console.log("expenditure action.payload", action.payload);
            state.items.push(action.payload);
        },
        revenue: (state, action) => {
            console.log("revenue action.payload", action.payload);
            state.revenue = action.payload;
        },
    },
});

export const { expenditure, revenue } = slice.actions;

const store = configureStore({
    reducer: {
        account: slice.reducer,
    },
});

export default store;
