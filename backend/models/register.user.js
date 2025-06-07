import { model, Schema } from "mongoose";

const registerSchema = new Schema({
    userName : {
        type : String,
        required : true
    },

    Phone : {
        type : String,
        required: true
    },

    Email : {
        type : String,
        required : true,
        unique : true
    },

    Password : {
        type : String,
        required : true
    },

    createdAt: { 
        type: Date, 
        default: Date.now 
    },

    updatedAt : {
        type : Date
    }

})

const registerModel = model("user",registerSchema);

export default registerModel;