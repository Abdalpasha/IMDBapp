import express from "express";
import { moviesModel } from "../Model/moviesModel";

export class MovieServices{
    public static async createMovie(req:express.Request, res:express.Response){
        try{
            let newMovie = new moviesModel(req.body);
            await newMovie.save();
            return newMovie
        }
        catch(err){
            console.log(err);
            return err
        }
    }

    public static async getAllMovies(req:express.Request, res:express.Response){
        try{
            let allMovies = await moviesModel.find().exec();
            return allMovies;
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }

    public static async getMovieById(req:express.Request, res: express.Response){
        try{
            let movie = await moviesModel.findById(req.params.movieId).exec();
        return movie;
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }

    public static async updateMovieById(req:express.Request, res:express.Response){
        try{
            let movie:any = await moviesModel.findById(req.params.movieId).exec();
        movie.name = req.body.name;
        movie.yearOfRelease = req.body.yearOfRelease;
        movie.plot = req.body.plot;
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }
}