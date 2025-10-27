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

// Initialize Prometheus counter
const productSortCounter = new promClient.Counter({
  name: 'product_sort_ab_test',
  help: 'Counts the number of times each version of the product sort is used',
  labelNames: ['version']
});


module.exports = { orderValueHistogram, metricsMiddleware, productSortCounter };
