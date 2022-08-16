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
    // commenting regex check for dev purpose
    // const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)
    // return passwordRegex.test(enteredPassword)
    return true
}

//Convert phone number to format (xxx)xxx-xxxx
export const normalizePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return ''
    //check if number length equals to 10
    if (phoneNumber.length === 10) {
        //reformat and return phone number
        phoneNumber = phoneNumber.replace(/[^\d]/g, "");
        return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, " ($1) $2 - $3");
    }
}

//Convert phone number to format xxxxxxxxxx
export const denormalizePhoneNumber = (phoneNumber) => {
    phoneNumber = phoneNumber.replace(/[^\d]/g, "");
    //check if number length equals to 10
    if (phoneNumber.length === 10) {
        //reformat and return phone number
        return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1$2$3");
    }
    return null;
}

//Check if any field in userDetails is empty or not
export const isEmpty = (userDetails) => {
    const isFieldEmpty = Object.values(userDetails).every(field => field);
    return isFieldEmpty;
}