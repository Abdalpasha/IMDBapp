import mongoose from "mongoose";

const producerSchema =  new mongoose.Schema({
    "name" :{ type: String, required : true},
    "sex" : {type: String, required : true},
    "DOB" : {type:String, required : true},
    "bio" : String
})

export const producerModel = mongoose.model('producer', producerSchema);