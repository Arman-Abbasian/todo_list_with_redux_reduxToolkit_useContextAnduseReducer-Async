import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducer";

const rootReducer=combineReducers({
    todos:todoReducer,
});
export default rootReducer;
