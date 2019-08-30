"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const moviesSchema = new mongoose_1.default.Schema({
    "name": { type: String, required: true },
    "year of release": { type: String, required: true },
    "plot": String
});
exports.moviesModel = mongoose_1.default.model('movies', moviesSchema);
