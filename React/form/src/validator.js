let ValidateAge = (edad) => {
    return edad >= 18 && edad <= 65;
}

let ValidatePassword = (repass, pass) => {
    return pass === repass;
}

export { ValidateAge, ValidatePassword };
