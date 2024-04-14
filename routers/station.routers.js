const express = require("express");
const {Station} = require("../models");
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation, getAllProvince} = require("../backend-datVeXe/controllers/station.controllers");
const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {authenticate} = require("../backend-datVeXe/middlewares/auth/authenticate");
const {authorize} = require("../backend-datVeXe/middlewares/auth/authorize");
const stationRouter = express.Router();

stationRouter.post("/", authenticate, authorize(["ADMIN"]), createStation);
stationRouter.get("/province", getAllProvince);

stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", authenticate, authorize(["ADMIN"]), checkExist(Station), updateStation);
stationRouter.delete("/:id", authenticate, authorize(["ADMIN"]), checkExist(Station), deleteStation);
module.exports = {
	stationRouter,
};
