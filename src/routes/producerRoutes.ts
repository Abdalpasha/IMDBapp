import {Router} from "express";
import { ProducerController } from "../controller/producerController";

export const ProducerRoutes : Router = Router();

ProducerRoutes.post('/create', ProducerController.createProducer);
ProducerRoutes.get('/', ProducerController.getAllProducers);
ProducerRoutes.get('/:producerId', ProducerController.getProducerById);
ProducerRoutes.put('/update/:producerId', ProducerController.updateProducerById);