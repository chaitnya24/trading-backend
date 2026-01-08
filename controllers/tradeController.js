
import { tradesDB } from "../config/db.js";
const getTrades = (req, res) => res.json({ success: true, data: tradesDB });
export { getTrades };
