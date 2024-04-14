const express = require("express");
const {getTimePointByTrip, CreateTimePointByTrip, GetTimePointDetail} = require("../backend-datVeXe/controllers/timePoint.controller");

const {checkExist} = require("../backend-datVeXe/middlewares/validations/checkExist");
const {TimePoint} = require("../models");

const TimePointRouter = express.Router();

TimePointRouter.get("/", getTimePointByTrip);
TimePointRouter.get("/:id", GetTimePointDetail);

TimePointRouter.post("/", CreateTimePointByTrip);
module.exports = {TimePointRouter};
