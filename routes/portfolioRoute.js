
import express from "express";
import { getPortfolio } from "../controllers/portfolioController.js";
const router = express.Router();
router.get("/", getPortfolio);
export default router;

/**
 * @swagger
 * /api/v1/portfolio:
 *   get:
 *     summary: Fetch portfolio holdings
 *     tags: [Portfolio]
 *     responses:
 *       200:
 *         description: Portfolio data
 */
