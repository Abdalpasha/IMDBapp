import express from "express";
import * as bodyparser from "body-parser";
import {DB} from "./startUp/Db";
import { Routes } from "./startUp/routes"

class IMDB{
    app : express.Application
    constructor(){
        this.app = express();
        this.app.listen(3000,'localhost',()=>{console.log("server is up and running")});
        this.configBodyParser();
        Routes.configRoutes(this.app);
        DB.connectMongoDb();
        
    }

    private configBodyParser(){
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended : false}))
    }
}

let myIMDBapp = new IMDB();