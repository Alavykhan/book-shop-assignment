"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_router_1 = __importDefault(require("./module/products/products.router"));
const orders_router_1 = __importDefault(require("./module/orders/orders.router"));
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use('/api/products', products_router_1.default);
app.use('/api/orders', orders_router_1.default);
app.get('/', (req, res) => {
    res.send('Book Shop database is working');
});
exports.default = app;
