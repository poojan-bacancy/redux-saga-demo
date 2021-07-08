import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";

const initialState = {
    loading : false,
    user : null,
    error : null
}

const LoginReducer = (state=initialState,action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.userDetails,
                loading: false,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}

export default LoginReducer