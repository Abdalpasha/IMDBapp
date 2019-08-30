import {Router} from "express";
import { ActorController } from "../controller/actorController";

let actorControllerObject = new ActorController()
export const ActorRoutes:Router = Router(); 

ActorRoutes.post('/create', actorControllerObject.createActor);
ActorRoutes.get('/', actorControllerObject.getAllActors);
ActorRoutes.get('/:actorId', actorControllerObject.getActorById);
ActorRoutes.put('/:actorId', actorControllerObject.updateActorById);