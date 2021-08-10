import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";
import { REGISTER_REQUEST , REGISTER_SUCCESS , REGISTER_FAILURE} from '../Register/constants'

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
                user: action.response,
                loading: false,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.response,
                loading: false,
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
}

export default LoginReducer