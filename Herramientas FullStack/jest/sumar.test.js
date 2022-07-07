const sumar = require("./sumar");

describe("Sumar numeros", () => {
  test("Suma de 1 + 2 es = a 3", () => {
    expect(sumar(1, 2)).toEqual(3);
  });
});
