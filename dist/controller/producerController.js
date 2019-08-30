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
const producerService_1 = require("../Services.ts/producerService");
class ProducerController {
    static createProducer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield producerService_1.ProducerService.createNewProducer(req, res);
            res.json(result);
        });
    }
    static getAllProducers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield producerService_1.ProducerService.getAllProducers(req, res);
            res.json(result);
        });
    }
    static getProducerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield producerService_1.ProducerService.getProducerById(req, res);
            res.json(result);
        });
    }
    static updateProducerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield producerService_1.ProducerService.updateProducerById(req, res);
            res.json(result);
        });
    }
}
exports.ProducerController = ProducerController;
