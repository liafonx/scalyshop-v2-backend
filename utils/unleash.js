const { initialize } = require("unleash-client");

const unleash = initialize({
  url: 'https://gitlab.com/api/v4/feature_flags/unleash/67139537',
  appName: '*',
  instanceId: "glffct-rkamtBbWXGaZ4zD7tdyS",
});

module.exports = {
  unleash
}