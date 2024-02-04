"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const paymentRouter = (0, express_1.default)();
exports.paymentRouter = paymentRouter;
const payments_controllers_1 = require("../controllers/payments.controllers");
paymentRouter.post('/api/v1/payments/:id', payments_controllers_1.payments);
//# sourceMappingURL=payments.route.js.map