import { model, Schema } from "mongoose";

const adminSchema = new Schema({
    Name : {
        type : String,
        require : true
    },

    Email : {
        type : String,
        require : true,
        unique : true
    },

    Password : {
        type : String,
        require : true,
        unique : true
    }
})

const adminModel = model("admin",adminSchema);

export default adminModel;