"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const actorsModel_1 = require("../Model/actorsModel");
class ActorServices {
    static createActor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newActor = new actorsModel_1.actorModel(req.body);
                yield newActor.save();
                return newActor;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static getAllActors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allActors = yield actorsModel_1.actorModel.find().exec();
                return allActors;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getActorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let actorById = yield actorsModel_1.actorModel.findById(req.params.actorId).exec();
                return actorById;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static updateActorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let updateActor = yield actorsModel_1.actorModel.findById(req.params.actorId).exec();
                updateActor.name = req.body.name;
                updateActor.sex = req.body.sex;
                updateActor.DOB = req.body.DOB;
                updateActor.bio = req.body.bio;
                yield updateActor.save();
                return updateActor;
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
}
exports.ActorServices = ActorServices;
