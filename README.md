
# 📈 Trading API Wrapper SDK  
**Campus Hiring Assignment – Backend System Design**

---

## 1. Introduction

This project is a **simplified trading backend system** built as part of a campus hiring assignment for a stock broking platform (similar to Bajaj Broking).

The goal of the project is **not real trading**, but to demonstrate:
- Backend architecture skills
- REST API design
- Understanding of basic trading concepts
- Clean and maintainable code structure

The system simulates how a trading platform works internally when a user places orders and views their portfolio.

---

## 2. What Does This System Do?

Using REST APIs, this backend allows a user to:

- View available financial instruments (stocks)
- Place BUY or SELL orders
- Check order status
- View executed trades
- View current portfolio holdings

All operations are handled using **in-memory storage**, making the system lightweight and easy to understand.

---

## 3. Tech Stack Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **API Style:** REST (JSON)
- **Storage:** In-memory (JavaScript Map & Array)
- **Authentication:** Mocked (single hardcoded user)
- **Testing Tool:** Thunder Client / Postman

---

## 4. Project Folder Structure (Explained)

```
backend/
├── server.js
├── package.json
├── .env
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── instrumentController.js
│   ├── orderController.js
│   ├── tradeController.js
│   └── portfolioController.js
│
├── middleware/
│   └── auth.js
│
├── models/
│
├── routes/
│   ├── instrumentRoute.js
│   ├── orderRoute.js
│   ├── tradeRoute.js
│   └── portfolioRoute.js
```

### Why this structure?

- **server.js** – Entry point, configures middleware and routes
- **routes/** – Defines API endpoints
- **controllers/** – Contains all business and trading logic
- **middleware/** – Handles authentication (mocked)
- **config/** – Simulates database layer
- **models/** – Defines data structures

This structure follows **industry-standard backend design principles**.

---

## 5. Trading Concepts Implemented

### 5.1 Instruments
Tradable assets such as stocks.

Fields:
- symbol (AAPL, TSLA, etc.)
- exchange (NSE, NASDAQ)
- instrumentType (EQUITY)
- lastTradedPrice

---

### 5.2 Orders
Users can place:
- BUY or SELL orders
- MARKET or LIMIT orders

Validations:
- Quantity must be greater than 0
- LIMIT orders must include a price

---

### 5.3 Order Lifecycle (Simplified)

```
PLACED → EXECUTED
```

For simplicity:
- All orders execute immediately
- No order matching engine is implemented

---

### 5.4 Trades
- A trade is generated whenever an order is executed
- Stores execution price, quantity, and order reference

---

### 5.5 Portfolio
- Portfolio updates automatically after each trade
- Tracks:
  - Symbol
  - Total quantity
  - Average buy price

---

## 6. API Details

### Fetch Instruments
```
GET /api/v1/instruments
```

---

### Place Order
```
POST /api/v1/orders
```

Sample Request:
```json
{
  "symbol": "AAPL",
  "side": "BUY",
  "type": "MARKET",
  "quantity": 10
}
```

---

### Fetch Order Status
```
GET /api/v1/orders/{orderId}
```

---

### Fetch Trades
```
GET /api/v1/trades
```

---

### Fetch Portfolio
```
GET /api/v1/portfolio
```

---

## 7. Setup and Run Instructions

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Server
```bash
npm start
```

Server runs on:
```
http://localhost:4000
```

---

## 8. How the System Works (Execution Flow)

1. User fetches instruments
2. User places an order
3. Order is validated
4. Order executes immediately
5. Trade is created
6. Portfolio is updated
7. User can view trades and portfolio

---

## 9. Error Handling

The system handles common errors such as:
- Invalid quantity
- Missing price for LIMIT orders
- Invalid order ID

Proper HTTP status codes and messages are returned.

---

## 10. Assumptions Made

- Only one user exists (mock authentication)
- Orders execute immediately
- No real market pricing
- Data is stored in memory (resets on restart)

These assumptions were made to keep the focus on **backend design and logic**.

---

## 11. What This Project Demonstrates

- Clean backend architecture
- REST API design
- Trading workflow understanding
- Validation and error handling
- Interview-ready code explanation

---

## 12. Future Enhancements

- JWT-based authentication
- Persistent database (MongoDB / PostgreSQL)
- Advanced order lifecycle
- Order cancellation
- Swagger / OpenAPI documentation
- Unit testing

---

## 13. Interview Summary (What to Say)

> “This project simulates a trading backend where orders are placed, executed, and reflected in the portfolio. I focused on clean architecture, RESTful APIs, and core trading workflows rather than real market integration.”

---

