const add = (a, b) => a + b;

test("should return the sum", () => {
  const sum = add(5, 3);

  expect(sum).toBe(8);
});
