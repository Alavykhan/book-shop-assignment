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
exports.productsController = void 0;
const products_service_1 = require("./products.service");
const products_validation_1 = __importDefault(require("./products.validation"));
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const productValidation = products_validation_1.default.parse(payload);
        const result = yield products_service_1.productsService.createProducts(productValidation);
        res.send({
            status: true,
            message: 'Product successfully created',
            result,
        });
    }
    catch (error) {
        res.send({
            status: false,
            message: "Error product didn't create!",
            error,
        });
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.productsService.getProducts();
        res.send({
            status: true,
            message: 'Successfully get products from database',
            result,
        });
    }
    catch (error) {
        res.send({
            status: false,
            message: "Error! Didn't get the products from database!",
            error,
        });
    }
});
const getSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const result = yield products_service_1.productsService.getSingleProducts(userId);
        res.send({
            status: true,
            message: 'Successfully get single product from database',
            result,
        });
    }
    catch (error) {
        res.send({
            status: false,
            message: "Didn't get single product from database",
            error,
        });
    }
});
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const data = req.body;
        const result = yield products_service_1.productsService.updateProducts(userId, data);
        res.send({
            status: true,
            message: 'Successfully update the data of the product',
            result,
        });
    }
    catch (error) {
        res.send({
            status: false,
            message: "Error! Didn't update the product of the product!",
            error,
        });
    }
});
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        yield products_service_1.productsService.deleteProducts(userId);
        res.send({
            status: true,
            message: 'Successfully delete the product',
            result: {},
        });
    }
    catch (error) {
        res.send({
            status: false,
            message: "Error! Didn't update the product!",
            error,
        });
    }
});
exports.productsController = {
    createProducts,
    getProducts,
    getSingleProducts,
    updateProducts,
    deleteProducts,
};
