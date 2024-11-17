import express from 'express';
import { placeOrder, placeOrderStripe, placeOrderRazorpay, placeOrderMpesa, allOrders, userOrders, updateStatus } from "../controllers/orderController.js"
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';


const orderRouter = express.Router();

// Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)
orderRouter.post('/mpesa',authUser, placeOrderMpesa)

// User features
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter;  // eslint-disable-line no-unused-vars