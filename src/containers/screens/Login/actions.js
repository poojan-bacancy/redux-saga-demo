import { LOGIN_REQUEST } from './constants';

export const loginUser = (user) => ({
    type: LOGIN_REQUEST,
    payload: user,
});