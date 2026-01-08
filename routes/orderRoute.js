
import express from "express";
import { placeOrder, getOrderStatus } from "../controllers/orderController.js";
const router = express.Router();
router.post("/", placeOrder);
router.get("/:orderId", getOrderStatus);
export default router;
