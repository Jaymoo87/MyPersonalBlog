import * as express from 'express';
import Stripe from 'stripe'
import config from "../config"



const stripe = new Stripe(config.StripeInfo.api_key, {apiVersion: '2022-11-15'})

const DonateRouter = express.Router();

DonateRouter.post("/", async (req, res) => {
    const paymentMethod = req.body.paymentMethod;
    const amount = req.body.amount;
    try {
        const fulfilled = await stripe.paymentIntents.create({
            currency: 'usd', 
            amount: Number(amount) * 100,
            payment_method: paymentMethod.id,
            confirm: true
        });
        res.json(fulfilled)        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "fucked up the server"})
    }
});

export default DonateRouter;