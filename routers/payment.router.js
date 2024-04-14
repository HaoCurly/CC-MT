const express = require("express");
const {paymentController} = require("../backend-datVeXe/controllers/pay.controller");

const PaymentRouter = express.Router();

PaymentRouter.post("/", paymentController);

module.exports = {PaymentRouter};
