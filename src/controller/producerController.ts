import express from "express";
import { ProducerService } from "../Services.ts/producerService";

export class ProducerController{
    public static async createProducer(req:express.Request, res:express.Response){
        let result = await ProducerService.createNewProducer(req,res);
        res.json(result);
    }

    public static async getAllProducers(req:express.Request, res:express.Response){
        let result = await ProducerService.getAllProducers(req, res);
        res.json(result)
    }

    public static async getProducerById(req:express.Request, res:express.Response){
        let result = await ProducerService.getProducerById(req,res);
        res.json(result)
    }

    public static async updateProducerById(req:express.Request, res: express.Response){
        let result = await ProducerService.updateProducerById(req,res);
        res.json(result)
    }
}
