
import express from "express";
import { getTrades } from "../controllers/tradeController.js";
const router = express.Router();
router.get("/", getTrades);
export default router;

/**
 * @swagger
 * /api/v1/trades:
 *   get:
 *     summary: Fetch executed trades
 *     tags: [Trades]
 *     responses:
 *       200:
 *         description: List of trades
 */
