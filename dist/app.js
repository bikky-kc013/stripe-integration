"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//!This is how I integrate a stripe api in the node.ts based backend 
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
const morgan_1 = __importDefault(require("morgan"));
app.use((0, morgan_1.default)('dev'));
const errorHandler_1 = require("./middlewares/errorHandler");
const payments_route_1 = require("./routes/payments.route");
app.use(payments_route_1.paymentRouter);
app.use(errorHandler_1.notFound);
app.use(errorHandler_1.errorHandler);
const PORT = parseInt(process.env.PORT || '3000');
app.listen(PORT, "127.0.0.1", () => {
    console.log(`Listening to the port ${PORT}`);
});
//# sourceMappingURL=app.js.map