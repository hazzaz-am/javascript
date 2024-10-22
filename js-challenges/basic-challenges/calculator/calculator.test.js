const calculator = require("./calculator");

test("Calculating valus", () => {
  const num1 = 7;
  const num2 = 10;

  // calculate
  expect(calculator(num1, num2, "+")).toBe(17)
})