import express from "express";
import { MovieServices } from "../Services.ts/movieServices";

export class movieController{
    public async createMovie(req:express.Request, res:express.Response){
        let result = await MovieServices.createMovie(req,res);
        res.json(result)
    }

    public async getAllMovies(req:express.Request, res:express.Response){
        let result = await MovieServices.getAllMovies(req,res);
        res.json(result)
    }

    public async getMovieById(req:express.Request, res:express.Response){
        let result = await MovieServices.getMovieById(req,res);
        res.json(result)
    }

    public async updateMovieById(req:express.Request, res:express.Response){
        let result = await MovieServices.updateMovieById(req,res);
        res.json(result)
    }
    
}