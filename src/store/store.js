import counterReducer from "./Reducers/counterReducer";
import {combineReducers,createStore} from 'redux';
import todolistReducer from "./Reducers/todolistReducer";

const reducers=combineReducers({counter:counterReducer,todolist:todolistReducer})
const store=createStore(reducers);
export default store;