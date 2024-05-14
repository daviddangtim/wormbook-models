import bookValidator from "../validators/bookValidator";

const mongoose = require('mongoose');
const authValidator = require('validators/authValidator.js')

export const userSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        validate:{
            validator: value =>{
                try {
                    authValidator.parse({ name: value });
                    return true;
                } catch (ZodError) {
                    return false;
                }
                }
            }
        },
    userName : {
        type: String,
        required: true,
        unique: true,
        validate:{
        validator: value =>{
            try {
                authValidator.parse({ userName: value });
                return true;
            } catch (ZodError) {
                return false;
            }
        }
    },
    },
    password: {
        type: String,
        required: true,
            validate:{
            validator: value =>{
                try {
                    authValidator.parse({ password: value });
                    return true;
                } catch (ZodError) {
                    return false;
                }
            }
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: value =>{
                try {
                    authValidator.parse({ email: value });
                    return true;
                } catch (ZodError) {
                    return false;
                }
            }
        },
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: value =>{
                try {
                    authValidator.parse({ phoneNumber: value });
                    return true;
                } catch (ZodError) {
                    return false;
                }
            }
        },
    },
timestamps:true
});

const User = mongoose.model('User', userSchema)
export default User