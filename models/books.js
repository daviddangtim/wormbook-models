import {ZodError} from "zod";

const zod = require('zod')
const mongoose = require('mongoose');
const bookValidator = require('/validators/bookValidator.js')
// const User = require('/user.js')



const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: value => {
                try {
                    bookValidator.parse({ name : value });
                    return true;
                } catch (error) {
                    return false;
                }
        }
    }
    },
    copiesLeft: {
        type: Number,
        required: true,
        validate: {validate: {
    validator: value => {
        try {
            bookValidator.parse({ copiesLeft: value });
            return true;
        } catch (ZodError) {
            return false;
        }
    }}
}
},
    description: {
        type: String,
        required:true,
        validate: {validate: {
                validator: value => {
                    try {
                        bookValidator.parse({ description: value });
                        return true;
                    } catch (error) {
                        return false;
                    }
                }}
        }

    },
    // reservationStatus: {
    //     type: Boolean,
    //     default: false,
    // },
    reservedBy:[{
        userName : String,
        userId: {
            type: Types.ObjectId,
        },
        validate: {validate: {
                validator: value => {
                    try {
                        bookValidator.parse({ reservedBy: value });
                        return true;
                    } catch (error) {
                        return false;
                    }
                }}
        }
    }]

});


bookSchema.path('reservedBy.userId').ref('User');

const Book = mongoose.model('Book', bookSchema);

export default Book;




























