
import express from "express";
import { getInstruments } from "../controllers/instrumentController.js";
const router = express.Router();
router.get("/", getInstruments);
export default router;
