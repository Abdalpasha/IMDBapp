import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
    "name" : {type:String, required : true},
    "sex" : {type : String, required : true},
    "DOB" : {type : String, required : true },
    "Bio" : {type : String, required : true}
})

export const actorModel = mongoose.model('actor', actorSchema)