
# 📈 Trading API Wrapper SDK – Campus Hiring Assignment

## Overview
This project is a simplified trading backend system built to demonstrate backend design, REST API development, and basic trading concepts such as instruments, orders, trades, and portfolio holdings.

It simulates the core workflows of an online stock broking platform without real market connectivity.

---

## Tech Stack
- Backend: Node.js + Express.js
- API Format: REST (JSON)
- Storage: In-memory (Map / Array)
- Authentication: Mocked single user
- API Testing: Thunder Client / Postman

---

## Project Structure
```
backend/
├── server.js
├── package.json
├── .env
├── config/
│   └── db.js
├── controllers/
├── middleware/
├── models/
└── routes/
```

---

## Trading Concepts Implemented
- Instruments (symbol, exchange, type, LTP)
- Orders (BUY/SELL, MARKET/LIMIT)
- Order lifecycle (simplified)
- Trades generation
- Portfolio auto-update

---

## API Endpoints
- GET /api/v1/instruments
- POST /api/v1/orders
- GET /api/v1/orders/{orderId}
- GET /api/v1/trades
- GET /api/v1/portfolio

---

## How to Run
```
npm install
npm start
```
Server runs on http://localhost:4000

---

## Assumptions
- Single mocked user
- Immediate order execution
- In-memory storage

---

## What This Project Demonstrates
- Clean backend architecture
- RESTful API design
- Trading workflow understanding
- Error handling and validations

---

## Future Enhancements
- Real authentication
- Persistent database
- Advanced order lifecycle
- Swagger documentation
- Unit tests
