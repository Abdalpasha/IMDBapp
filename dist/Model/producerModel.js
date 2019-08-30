"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const producerSchema = new mongoose_1.default.Schema({
    "name": { type: String, required: true },
    "sex": { type: String, required: true },
    "DOB": { type: String, required: true },
    "bio": String
});
exports.producerModel = mongoose_1.default.model('producer', producerSchema);
