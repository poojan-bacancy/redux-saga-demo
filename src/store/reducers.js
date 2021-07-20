import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import LoginReducer from "containers/screens/Login/reducer";

export const combinedReducers = combineReducers({
    form : formReducer,
    Login : LoginReducer
}) 