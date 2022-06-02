import {createStore, combineReducers, applyMiddleware} from "redux";
import wordReducer from "./modules/wordReducer";
import thunk  from "redux-thunk";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({wordReducer})

const store = createStore(rootReducer, enhancer);

export default store;