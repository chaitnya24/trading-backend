
import express from "express";
import cors from "cors";
import "dotenv/config";

import instrumentRouter from "./routes/instrumentRoute.js";
import orderRouter from "./routes/orderRoute.js";
import tradeRouter from "./routes/tradeRoute.js";
import portfolioRouter from "./routes/portfolioRoute.js";
import authMiddleware from "./middleware/auth.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use(authMiddleware);

app.use("/api/v1/instruments", instrumentRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/trades", tradeRouter);
app.use("/api/v1/portfolio", portfolioRouter);

app.get("/", (req, res) => {
  res.send("Trading API is running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
