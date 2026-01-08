
import { instrumentsDB } from "../config/db.js";

const getInstruments = (req, res) => {
  res.json({ success: true, data: instrumentsDB });
};

export { getInstruments };
