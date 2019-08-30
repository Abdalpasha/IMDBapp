import express from "express";
import { ProducerService } from "../Services.ts/producerService";

export class ProducerController{
    public static async createProducer(req:express.Request, res:express.Response){
        let result = await ProducerService.createNewProducer(req,res);
        return result
    }

    public static async getAllProducers(req:express.Request, res:express.Response){
        let result = await ProducerService.getAllProducers(req, res);
        return result
    }

    public static async getProducerById(req:express.Request, res:express.Response){
        let result = await ProducerService.getProducerById(req,res);
        return result;
    }

    public static async updateProducerById(req:express.Request, res: express.Response){
        let result = await ProducerService.updateProducerById(req,res);
        return result;
    }
}
