import { LOGIN_REQUEST } from './constants';

export const getLoginDetails = (user) => ({
    type: LOGIN_REQUEST,
    payload: user,
});