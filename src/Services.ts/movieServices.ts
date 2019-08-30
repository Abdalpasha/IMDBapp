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
            let updateMovie:any = await moviesModel.findById(req.params.movieId).exec();
            updateMovie.name = req.body.name;
            updateMovie.yearOfRelease = req.body.yearOfRelease;
            updateMovie.plot = req.body.plot;
            await updateMovie.save();
            return updateMovie;
        }
        catch(err){
            console.log(err);
            return(err);
        }
    }
}