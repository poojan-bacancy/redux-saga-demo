import { REGISTER_REQUEST } from './constants';

export const signupUser = (user) => ({
    type: REGISTER_REQUEST,
    payload: user,
});