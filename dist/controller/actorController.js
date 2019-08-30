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
const actorService_1 = require("../Services.ts/actorService");
class ActorController {
    createActor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield actorService_1.ActorServices.createActor(req, res);
            res.json(result);
        });
    }
    getAllActors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = actorService_1.ActorServices.getAllActors(req, res);
            res.json(result);
        });
    }
    getActorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = actorService_1.ActorServices.getActorById(req, res);
            res.json(result);
        });
    }
    updateActorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = actorService_1.ActorServices.updateById(req, res);
            res.json(result);
        });
    }
}
exports.ActorController = ActorController;
