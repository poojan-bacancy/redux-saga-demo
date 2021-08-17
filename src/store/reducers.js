import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

const initialState = {
    loading : false,
    user : null,
    error : null
}

const LoginReducer = (state=initialState,action) => {
    switch(action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true,
            };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.response,
                loading: false,
            };

        case "LOGIN_FAILURE":
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case "REGISTER_REQUEST":
            return {
                ...state,
                loading: true,
            };

        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: action.response,
                loading: false,
            };

        case "REGISTER_FAILURE":
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
}

export const combinedReducers = combineReducers({
    form : formReducer,
    Login : LoginReducer
}) 