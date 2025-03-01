const promBundle = require("express-prom-bundle");
const promClient = promBundle.promClient;

const metricsBundle = promBundle({
    includeMethod: false,
    includePath: true,
    includeStatusCode: true,
    buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500],
    promClient: {
        collectDefaultMetrics: {}
    }
});

const orderPriceRecorder = new promClient.Counter({
        name: 'per_order_price_count',
        help: 'Record the price of each order',
        labelNames:['orderRef']
    },
);

const productSortRecorder = new promClient.Counter({
        name: 'per_request_product_sort_count',
        help: 'Record the sorting method of products for each request.',
        labelNames:['sort_by']
    },
);

module.exports = {
    metricsBundle,
    orderPriceRecorder,
    productSortRecorder
}