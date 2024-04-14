const express = require("express");
const {createTrip, getAllTrip, deleteTrip, updateTrip, getAllTripByUser, getDetailTrip} = require("../backend-datVeXe/controllers/trip.controllers");
const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {Trip} = require("../models");

const tripRouter = express.Router();

tripRouter.post("/", createTrip);
tripRouter.get("/", getAllTrip);
tripRouter.post("/tripUser", getAllTripByUser);
tripRouter.get("/:id", getDetailTrip);
tripRouter.delete("/:id", deleteTrip);
tripRouter.put("/:id", checkExist(Trip), updateTrip);

module.exports = {tripRouter};
