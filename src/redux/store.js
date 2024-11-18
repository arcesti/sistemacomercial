import { configureStore } from "@reduxjs/toolkit";
import produtoReducer from "./pordutoReducer.js";

const store = configureStore({
    reducer:{
        'produto': produtoReducer
    }
});

export default store;