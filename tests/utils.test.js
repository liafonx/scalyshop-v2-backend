const { isValidPrice } = require("../utils");

describe("isValidPrice", () => {
  it("should return true for valid prices with up to 2 decimal places", () => {
    expect(isValidPrice("10.99")).toBe(true);
    expect(isValidPrice("10")).toBe(true);
    expect(isValidPrice("0.01")).toBe(true);
  });

  it("should return false for prices with more than 2 decimal places", () => {
    expect(isValidPrice("10.999")).toBe(false);
    expect(isValidPrice("10.12345")).toBe(false);
  });

  it("should return false for negative prices", () => {
    expect(isValidPrice("-10")).toBe(false);
    expect(isValidPrice("-10.99")).toBe(false);
  });

  it("should return false for non-numeric values", () => {
    expect(isValidPrice("abc")).toBe(false);
    expect(isValidPrice(null)).toBe(false);
    expect(isValidPrice(undefined)).toBe(false);
    expect(isValidPrice(NaN)).toBe(false);
  });

  it("should return true for zero price", () => {
    expect(isValidPrice("0")).toBe(true);
  });
});
