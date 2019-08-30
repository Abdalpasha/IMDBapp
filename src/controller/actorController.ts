import express from "express";
import { ActorServices } from "../Services.ts/actorService";

export class ActorController{
    public async createActor(req:express.Request, res: express.Response){
        let result = await ActorServices.createActor(req,res);
        res.json(result);
    }

    public async getAllActors(req:express.Request, res: express.Response){
        let result = await ActorServices.getAllActors(req,res);
        res.json(result)
    }

    public async getActorById(req:express.Request, res:express.Response){
        let result = await ActorServices.getActorById(req,res);
        res.json(result);
    }

    public async updateActorById(req:express.Request, res: express.Response){
        let result = await ActorServices.updateActorById(req,res);
        res.json(result);
    }
}