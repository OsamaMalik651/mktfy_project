export const checkUpperCase = (password) => {
    let hasUpperCase = false;
    [...password]?.forEach((char) => {
        if (char === char.toUpperCase() && char.match(/[a-z]/i)) {
            hasUpperCase = true;
        }
    });
    return hasUpperCase;
};
export const checkLength = (password) => password.length >= 8;
export const checkNumberPresent = (password) => /\d/.test(password);

export const checkPasswordInput = (enteredPassword) => {
    const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)
    return passwordRegex.test(enteredPassword)
}