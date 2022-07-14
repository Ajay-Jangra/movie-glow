import { combineReducers } from "redux";
import {productReducer,selectedProductReducer}  from "./productReducer.js";
// import userReducer from "./userSlice.js";
 

const rootReducer =  combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    // user: userReducer,
});

export default  rootReducer;
