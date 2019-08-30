import express from "express";
import { actorModel } from "../Model/actorsModel";

export class ActorServices{

    public static async createActor(req:express.Request, res: express.Response){
        try{
            let newActor = new actorModel(req.body);
            await newActor.save();
            return newActor;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getAllActors(req:express.Request, res:express.Response){
        try{
            let allActors = await actorModel.find().exec();
            return allActors;
        }
        catch(err){
            console.log(err);
        }
    }

    public static async getActorById(req:express.Request, res: express.Response){
        try{
            let actorById = await actorModel.findById(req.params.actorId).exec();
            return actorById;
        }
        catch(err){
            console.log(err);
        }
    }

    public static async updateActorById(req:express.Request, res: express.Response){
        try{
            let updateActor:any = await actorModel.findById(req.params.actorId).exec();
            updateActor.name = req.body.name;
            updateActor.sex = req.body.sex;
            updateActor.DOB = req.body.DOB;
            updateActor.bio = req.body.bio;
            await updateActor.save();
            return updateActor;
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }
}