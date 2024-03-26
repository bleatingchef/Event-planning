import mongoose from "mongoose";
import validator from "validator";

const messSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name required"]
    },
    email:{
        type:String,
        required:[true, "Email required"],
        validator:[validator.isEmail,"please enter vaalid email"],
    },
    subject:{
        type:String,
        required:[true, "Subject required"],
        minLength:[5,"subject must contain at least 5 charactors!"]
    },
    message:{
        type:String,
        required:[true, "Message required"],
        minLength:[10,"message must contain at least 10 charactors!"],
    },
});

export const Mess = mongoose.model("Mess",messSchema);