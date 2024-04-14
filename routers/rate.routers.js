const express = require("express");
const { getAllRate, createRating } = require("../backend-datVeXe/controllers/rate.controller");
const { checkExist } = require("../backend-datVeXe/middlewares/validations/checkExist");
const { Rate } = require("../models");

const RateRouter = express.Router();

RateRouter.post("/", createRating);
RateRouter.get("/", getAllRate);

module.exports = { RateRouter };
