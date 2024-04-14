const express = require("express");
const {getAllPassenger, createPassenger, getDetailPassenger, deletePassenger, updatePassenger, updateImagePassenger} = require("../backend-datVeXe/controllers/passenger.controller");
const {uploadImage} = require("../backend-datVeXe/middlewares/upload/uploadImages");

const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {PassengerCarCompany} = require("../models");

const PassengerRouter = express.Router();

PassengerRouter.post("/", createPassenger);
PassengerRouter.get("/", getAllPassenger);
PassengerRouter.get("/:id", getDetailPassenger);
PassengerRouter.delete("/:id", deletePassenger);
PassengerRouter.put("/:id", updatePassenger);
PassengerRouter.put("/upload/:id", uploadImage("passenger"), updateImagePassenger);
module.exports = {PassengerRouter};
