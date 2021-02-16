export const requiredEmail = (value) => {
    return value ? undefined : 'email is required'
}

export const required = (value) => {
    return value ? undefined : 'field is required'
}

export const isValidEmail = (value) => {
    const reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ 
    return value.match(reg) ? undefined : 'invalid email'
}

export const requiredPassword = (value) => {
    return value ? undefined : 'password is required'
}

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)