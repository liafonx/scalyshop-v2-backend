var promClient = require("prom-client");

var ordersRequestTotal = new promClient.Counter({
  name: "orders_requests_total",
  help: "Total number of requests to /api/orders",
});

var orderValueHistogram = new promClient.Histogram({
  name: "order_total_value",
  help: "Total value of an order at checkout",
  buckets: [10, 50, 100, 200, 500, 1000],
});

module.exports = { ordersRequestTotal, orderValueHistogram };
