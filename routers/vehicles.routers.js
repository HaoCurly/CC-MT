const express = require("express");
const {getAllVehicles, createVehicles, getDetailVehicles, deleteVehicles, updateVehicles, getAllVehiclesByPassenger} = require("../backend-datVeXe/controllers/vehicle.controller");
const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {Vehicles} = require("../models");

const VehiclesRouter = express.Router();

VehiclesRouter.post("/", createVehicles);
VehiclesRouter.get("/", getAllVehicles);
VehiclesRouter.get("/passenger", getAllVehiclesByPassenger);
VehiclesRouter.get("/:id", getDetailVehicles);
VehiclesRouter.delete("/:id", deleteVehicles);
VehiclesRouter.put("/:id", checkExist(Vehicles), updateVehicles);

module.exports = {VehiclesRouter};
