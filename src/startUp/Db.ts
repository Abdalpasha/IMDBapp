import mongoose from "mongoose";

export class DB{
    private static connectionString : string = "mongodb://localhost:27017/IMDBapp"

    public static connectMongoDb(){
        mongoose.connect(this.connectionString,{useNewUrlParser : true})
        .then(() => {console.log("DB connection Successfull")})
        .catch((err) => {console.log("DB connection Failled");console.log(err);
        })
    }
}