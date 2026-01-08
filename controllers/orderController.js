
import { ordersDB, tradesDB, portfolioDB } from "../config/db.js";
import crypto from "crypto";

const placeOrder = (req, res) => {
  const { symbol, side, type, quantity, price } = req.body;

  if (quantity <= 0) {
    return res.status(400).json({ message: "Quantity must be > 0" });
  }

  if (type === "LIMIT" && !price) {
    return res.status(400).json({ message: "Price required for LIMIT order" });
  }

  const id = crypto.randomUUID();
  const order = { id, symbol, side, type, quantity, price, status: "EXECUTED" };

  ordersDB.set(id, order);
  tradesDB.push({ orderId: id, symbol, quantity, price: price || 100 });

  const existing = portfolioDB.get(symbol);
  if (existing) {
    existing.quantity += quantity;
  } else {
    portfolioDB.set(symbol, { symbol, quantity, averagePrice: price || 100 });
  }

  res.json({ success: true, order });
};

const getOrderStatus = (req, res) => {
  const order = ordersDB.get(req.params.orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json({ success: true, order });
};

export { placeOrder, getOrderStatus };
