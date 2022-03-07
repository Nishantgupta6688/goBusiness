import { GET_SALES } from "../actions/types";

export const salesDataReducer = (state = [],action) => {
    switch(action.type){
        case GET_SALES:
            return action.payload
        default:
            return state;
    }
}