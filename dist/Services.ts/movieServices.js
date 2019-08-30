"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moviesModel_1 = require("../Model/moviesModel");
class MovieServices {
    static createMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newMovie = new moviesModel_1.moviesModel(req.body);
                yield newMovie.save();
                return newMovie;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    static getAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allMovies = yield moviesModel_1.moviesModel.find().exec();
                return allMovies;
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static getMovieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let movie = yield moviesModel_1.moviesModel.findById(req.params.movieId).exec();
                return movie;
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
    static updateMovieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let movie = yield moviesModel_1.moviesModel.findById(req.params.movieId).exec();
                movie.name = req.body.name;
                movie.yearOfRelease = req.body.yearOfRelease;
                movie.plot = req.body.plot;
            }
            catch (err) {
                console.log(err);
                return (err);
            }
        });
    }
}
exports.MovieServices = MovieServices;
