"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actorRoutes_1 = require("../routes/actorRoutes");
const movieRoutes_1 = require("../routes/movieRoutes");
const producerRoutes_1 = require("../routes/producerRoutes");
class Routes {
    static configRoutes(app) {
        app.get('/', (req, res) => {
            res.status(200).json({ "success": "server is up" });
        });
        app.use('/actor', actorRoutes_1.ActorRoutes);
        app.use('/movies', movieRoutes_1.MovieRoutes);
        app.use('/producer', producerRoutes_1.ProducerRoutes);
    }
}
exports.Routes = Routes;
