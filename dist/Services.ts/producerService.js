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
const producerModel_1 = require("../Model/producerModel");
class ProducerService {
    static createNewProducer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newProducer = new producerModel_1.producerModel(req.body);
                yield newProducer.save();
                return newProducer;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static getAllProducers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allProducers = yield producerModel_1.producerModel.find().exec();
                return allProducers;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static getProducerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let producerId = yield producerModel_1.producerModel.findById(req.params.id).exec();
                return producerId;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static updateProducerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let updatedProducer = yield producerModel_1.producerModel.findById(req.params.id).exec();
                updatedProducer.name = req.body.name;
                updatedProducer.sex = req.body.sex;
                updatedProducer.DOB = req.body.DOB;
                updatedProducer.bio = req.body.bio;
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
}
exports.ProducerService = ProducerService;
