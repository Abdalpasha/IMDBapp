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
const movieServices_1 = require("../Services.ts/movieServices");
class movieController {
    createMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield movieServices_1.MovieServices.createMovie(req, res);
            return result;
        });
    }
    getAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield movieServices_1.MovieServices.getAllMovies(req, res);
            return result;
        });
    }
    getMovieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield movieServices_1.MovieServices.getMovieById(req, res);
            return result;
        });
    }
    updateMovieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield movieServices_1.MovieServices.updateMovieById(req, res);
            return result;
        });
    }
}
exports.movieController = movieController;
