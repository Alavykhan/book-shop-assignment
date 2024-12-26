"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersController = void 0;
const orders_service_1 = require("./orders.service");
const orders_validation_1 = __importDefault(require("./orders.validation"));
// creating order
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parseData = orders_validation_1.default.parse(req.body);
        const { email, product, quantity } = parseData;
        const result = yield orders_service_1.ordersService.createOrders(email, product, quantity);
        res.send({
            status: true,
            message: 'Order successfully placed',
            result,
        });
    }
    catch (error) {
        res.send({
            status: false,
            message: "Error! Didn't please the order",
            error,
        });
    }
});
// revenue controller
const gotTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_service_1.ordersService.calculationRevenue();
        res.send({
            status: true,
            message: 'Revenue calculated successfully"',
            result,
        });
    }
    catch (error) {
        res.send({
            status: false,
            message: "Error! Didn't get the revenue",
            error,
        });
    }
});
exports.ordersController = { createOrders, gotTotalRevenue };
