import * as express from "express";
import {ActorRoutes} from '../routes/actorRoutes';
import { MovieRoutes } from "../routes/movieRoutes";
import { ProducerRoutes} from "../routes/producerRoutes"

export class Routes{
    public static configRoutes(app : express.Application){
        app.get('/' , (req: express.Request, res:express.Response) =>{
            res.status(200).json({"success" : "server is up"});
        })
        
        app.use('/actor', ActorRoutes);
        app.use('/movies', MovieRoutes);
        app.use('/producer', ProducerRoutes);
    }
}