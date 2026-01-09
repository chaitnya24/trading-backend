
import express from "express";
import { getInstruments } from "../controllers/instrumentController.js";
const router = express.Router();
router.get("/", getInstruments);
export default router;

/**
 * @swagger
 * /api/v1/instruments:
 *   get:
 *     summary: Fetch all tradable instruments
 *     tags: [Instruments]
 *     responses:
 *       200:
 *         description: List of instruments
 */
