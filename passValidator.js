function passwordValidator(input) {
    let length = input.length;
    let isValidLength = length >= 6 && length <= 10;
    let isValidString = /^[a-zA-Z0-9]+$/.test(input);
    let onlyTwoDigits = /^(?=.*\d.*\d)[a-zA-Z0-9]+$/.test(input);
 
    if (isValidString && onlyTwoDigits && isValidLength) {
        console.log("Password is valid");
    } else if (!isValidLength && isValidString && onlyTwoDigits) {
        console.log("Password must be between 6 and 10 characters");
    } else if (isValidLength && !isValidString && onlyTwoDigits) {
        console.log("Password must consist only of letters and digits");
    } else if (isValidLength && isValidString && !onlyTwoDigits) {
        console.log("Password must have at least 2 digits");
    } else if (!isValidLength && !isValidString && onlyTwoDigits) {
        console.log("Password must be between 6 and 10 characters");
        console.log("Password must consist only of letters and digits");
    } else if (!isValidLength && isValidString && !onlyTwoDigits) {
        console.log("Password must be between 6 and 10 characters");
        console.log("Password must have at least 2 digits");
    } else if (isValidLength && !isValidString && !onlyTwoDigits) {
        console.log("Password must consist only of letters and digits");
        console.log("Password must have at least 2 digits");
    }
}
