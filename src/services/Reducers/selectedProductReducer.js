import { actionTypes } from '../Constants/actionTypes'

export const selectedProductReducer = (state = { }, action) => {
    switch (action.type) {
        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...action.payload
            }  
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return{ }     
        default:
            return state
    }
}