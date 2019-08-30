"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producerController_1 = require("../controller/producerController");
exports.ProducerRoutes = express_1.Router();
exports.ProducerRoutes.post('/create', producerController_1.ProducerController.createProducer);
exports.ProducerRoutes.get('/', producerController_1.ProducerController.getAllProducers);
exports.ProducerRoutes.get('/:producerId', producerController_1.ProducerController.getProducerById);
exports.ProducerRoutes.put('/update/:producerId', producerController_1.ProducerController.updateProducerById);
