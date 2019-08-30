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

    public static async updateById(req:express.Request, res: express.Response){
        try{
            let actor:any = await actorModel.findOne(req.body.name).exec();
            actor.name = req.body.name;
            actor.sex = req.body.sex;
            actor.DOB = req.body.DOB;
            actor.bio = req.body.bio;
            await actor.save();
            return actor;
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }
}