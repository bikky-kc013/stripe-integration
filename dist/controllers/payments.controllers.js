"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payments = void 0;
const stripe = require('stripe')(process.env.SECRET_KEY);
const payments = async (req, res) => {
    try {
        const { amount } = req.body;
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Bikky",
                        },
                        unit_amount: amount * 100,
                    },
                    quantity: "100",
                },
            ],
            mode: "payment",
            success_url: "http://www.google.com",
            cancel_url: "http://www.facebook.com",
        });
        res.send("Paid successfully");
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Payment failed');
    }
};
exports.payments = payments;
//# sourceMappingURL=payments.controllers.js.map