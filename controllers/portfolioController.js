
import { portfolioDB } from "../config/db.js";
const getPortfolio = (req, res) => {
  res.json({ success: true, data: Array.from(portfolioDB.values()) });
};
export { getPortfolio };
