import { detectSpacesRegex, alphaNumericRegex , passwordRegex } from "./regex"

const validationStrings = {
    usernameRequired : 'Username is Required',
    passwordRequired : 'Password is Required',
    invalidUsername : 'Invalid Username',
    invalidpassword : 'Invalid Password'
}

export const passwordRequired = (value) => value? undefined : validationStrings.passwordRequired

export const usernameRequired = (value) => value? undefined : validationStrings.usernameRequired

export const validatePassword = value => 
    value && !value.match(passwordRegex)
    ? validationStrings.invalidpassword
    : undefined

export const removeSpaces = (term) => term.replace(detectSpacesRegex, '')

export const alphaNumeric = value => 
    value && !value.match(alphaNumericRegex)
    ? validationStrings.invalidUsername
    : undefined