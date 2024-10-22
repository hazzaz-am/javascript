const countOccurencesSplit = require("./count-occurences")

test("Count Number of Occurences", () => {
  expect(countOccurencesSplit("Hazzaz", "z")).toBe(3)
})