import { combineReducers } from "redux";
import { salesDataReducer } from './salesDataReducer';


export default combineReducers({
    salesData: salesDataReducer
})