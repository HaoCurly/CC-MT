const express = require("express");
const {createTripPassenger, getAllTripPassenger, getDetailTripPassenger, deleteTripPassenger, updateTripPassenger, getAllTripPassengerNew, confirmTripPassenger, SortPriceTripPassenger, SortTimeTripPassenger, FilterTimeTripPassenger} = require("../backend-datVeXe/controllers/tripPassenger.controller");
const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {TripPassenger} = require("../models");

const tripPassengerRouter = express.Router();
tripPassengerRouter.get("/trip2", getAllTripPassengerNew);
tripPassengerRouter.post("/", createTripPassenger);
tripPassengerRouter.get("/", getAllTripPassenger);
tripPassengerRouter.get("/:id", getDetailTripPassenger);
tripPassengerRouter.post("/sortprice", SortPriceTripPassenger);
tripPassengerRouter.post("/sorttime", SortTimeTripPassenger);
tripPassengerRouter.post("/filtertime", FilterTimeTripPassenger);
tripPassengerRouter.delete("/:id", deleteTripPassenger);
tripPassengerRouter.put("/:id", checkExist(TripPassenger), updateTripPassenger);
tripPassengerRouter.put("/confirm/:id", checkExist(TripPassenger), confirmTripPassenger);

module.exports = {tripPassengerRouter};
