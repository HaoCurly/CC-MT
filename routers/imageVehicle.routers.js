const express = require("express");
const {getAllImgVehicle, deleteImgVehicle, updateImgVehicle, getDetailImgVehicle, createImgVehicle} = require("../backend-datVeXe/controllers/imageVehicle.controller");
const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {ImageVehicle} = require("../models");
const {uploadImage} = require("../backend-datVeXe/middlewares/upload/uploadImages");

const ImageVehicleRouter = express.Router();

ImageVehicleRouter.post("/", uploadImage("imagevehicle"), createImgVehicle);
ImageVehicleRouter.get("/", getAllImgVehicle);
ImageVehicleRouter.get("/:id", getDetailImgVehicle);
ImageVehicleRouter.delete("/:id", deleteImgVehicle);
ImageVehicleRouter.put("/:id", checkExist(ImageVehicle), updateImgVehicle);

module.exports = {ImageVehicleRouter};
