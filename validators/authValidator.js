const { z } = require("zod");


const nameValidator = z.string().nonempty();
const userNameValidator = z.string().nonempty();
const passwordValidator = z.string().min(6);
const emailValidator = z.string().email();
const phoneNumberValidator = z.string().regex(/^\d{10}$/); // Assuming phone number is 10 digits

const signUpValidator = z.object({
    name: nameValidator,
    userName: userNameValidator,
    password: passwordValidator,
    email: emailValidator,
    phoneNumber: phoneNumberValidator,
});

const loginValidator = z.object({
    userName: userNameValidator,
    password: passwordValidator,
});

module.exports = { signUpValidator, loginValidator };
