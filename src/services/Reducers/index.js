import { combineReducers } from "redux";

import {productReducer} from './productReducer'
import { selectedProductReducer } from "./selectedProductReducer";


export const rootReducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer
})