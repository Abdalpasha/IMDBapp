"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const actorSchema = new mongoose_1.default.Schema({
    "name": { type: String, required: true },
    "sex": { type: String, required: true },
    "DOB": { type: String, required: true },
    "Bio": { type: String, required: true }
});
exports.actorModel = mongoose_1.default.model('actor', actorSchema);
