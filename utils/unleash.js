const { initialize } = require("unleash-client");

const unleash = initialize({
  url: "https://git.chalmers.se/api/v4/feature_flags/unleash/20327",
  appName: "scalyshop-v2-backend",
  instanceId: "glffct-KbfRpLj32wyLUF_QjQLb",
});

module.exports = { unleash };
