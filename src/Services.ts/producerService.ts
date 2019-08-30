import express from "express";
import { producerModel } from "../Model/producerModel";

export class ProducerService{
    public static async createNewProducer(req:express.Request, res:express.Response){
        try{
            let newProducer = new producerModel(req.body)
            await newProducer.save();
            return newProducer;
        }
        catch(err){
            console.log(err);
            return err;
        }
    } 

    public static async getAllProducers(req:express.Request, res:express.Response){
        try{
            let allProducers = await producerModel.find().exec();
            return allProducers;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getProducerById(req:express.Request, res:express.Response){
        try{
            let producerId = await producerModel.findById(req.params.id).exec();
            return producerId
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async updateProducerById(req:express.Request, res:express.Response){
        try{
            let updatedProducer : any = await producerModel.findById(req.params.id).exec()
            updatedProducer.name = req.body.name;
            updatedProducer.sex = req.body.sex;
            updatedProducer.DOB = req.body.DOB;
            updatedProducer.bio = req.body.bio;
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }


}