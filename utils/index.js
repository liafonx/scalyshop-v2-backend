function isValidPrice(value) {
  const regex = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
  return regex.test(value);
}

module.exports = { isValidPrice };
