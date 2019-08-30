import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
    "name" : {type : String, required : true},
    "year of release" : {type: String, required : true},
    "plot" : String
});

export const moviesModel = mongoose.model('movies', moviesSchema);