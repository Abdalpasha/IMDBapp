import {Router} from "express";
import { movieController } from "../controller/movieController";

let movieControllerObj = new movieController();
export const MovieRoutes : Router = Router();

MovieRoutes.post('/create', movieControllerObj.createMovie);
MovieRoutes.get('/', movieControllerObj.getAllMovies);
MovieRoutes.get('/:movieId', movieControllerObj.getMovieById);
MovieRoutes.put('/update/:movieId', movieControllerObj.updateMovieById);