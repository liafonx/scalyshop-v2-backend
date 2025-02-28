var promBundle = require("express-prom-bundle");
const promClient = promBundle.promClient

var metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  normalizePath: true,
});

var orderValueHistogram = new promClient.Histogram({
  name: "order_total_value",
  help: "Total value of an order at checkout",
  buckets: [10, 50, 100, 200, 500, 1000],
});

module.exports = { orderValueHistogram, metricsMiddleware };
