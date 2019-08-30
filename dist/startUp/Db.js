"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DB {
    static connectMongoDb() {
        mongoose_1.default.connect(this.connectionString, { useNewUrlParser: true })
            .then(() => { console.log("DB connection Successfull"); })
            .catch((err) => {
            console.log("DB connection Failled");
            console.log(err);
        });
    }
}
DB.connectionString = "mongodb://localhost:27017/IMDBapp";
exports.DB = DB;
