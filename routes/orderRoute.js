
import express from "express";
import { placeOrder, getOrderStatus } from "../controllers/orderController.js";
const router = express.Router();
router.post("/", placeOrder);
router.get("/:orderId", getOrderStatus);
export default router;

/**
 * @swagger
 * /api/v1/orders:
 *   post:
 *     summary: Place a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               symbol:
 *                 type: string
 *               side:
 *                 type: string
 *                 example: BUY
 *               type:
 *                 type: string
 *                 example: MARKET
 *               quantity:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Order placed successfully
 */

router.post("/", placeOrder);
