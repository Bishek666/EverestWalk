
import { combineReducers } from "redux";
import productReducer from "./productReducer"

const reducers = combineReducers({
    data: productReducer
})

export default reducers
