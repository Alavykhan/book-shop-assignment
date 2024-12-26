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
exports.ordersService = void 0;
const products_model_1 = __importDefault(require("../products/products.model"));
const orders_model_1 = __importDefault(require("./orders.model"));
const createOrders = (email, productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_model_1.default.findById(productId);
    if (!product) {
        throw new Error("product didn't found!");
    }
    //   check if there any sufficient stock
    if (product.quantity < quantity) {
        throw new Error('Insufficient stock');
    }
    // calculating total Price
    const totalPrice = product.price * quantity;
    // creating oder
    const newOrder = new orders_model_1.default({
        email,
        product: productId,
        quantity,
        totalPrice,
    });
    // updating stock of the product
    product.quantity -= quantity;
    if (product.quantity === 0) {
        product.inStock = false;
    }
    yield product.save();
    yield newOrder.save();
    return newOrder;
});
// revenue calculation of the orders
const calculationRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield orders_model_1.default.find();
    let totalRevenue = 0;
    for (const order of orders) {
        const product = yield products_model_1.default.findById(order.product);
        if (product) {
            totalRevenue += product.price * order.quantity;
        }
    }
    return totalRevenue;
});
exports.ordersService = { createOrders, calculationRevenue };
