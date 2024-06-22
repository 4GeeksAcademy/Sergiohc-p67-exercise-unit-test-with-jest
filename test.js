// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comenzar la primera prueba: sumar 14 y 9 para obtener 23
test('adds 14 + 9 to equal 23', () => {
    // Llamar a la función sum con los números 14 y 9
    let total = sum(14, 9);

    // Verificar si la suma es igual a 23
    expect(total).toBe(23);
});

// Prueba para verificar la conversión de euros a dólares
test("One euro should be 1.07 dollars", function() {
    // Importar la función fromEuroToDollar desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Llamar a la función con un valor de 3.5 euros
    const dollars = fromEuroToDollar(3.5);

    // Calcular el valor esperado
    const expected = 3.5 * 1.07;

    // Verificar si el resultado es igual al valor esperado
    expect(fromEuroToDollar(3.5)).toBe(expected);
})

// Prueba para verificar la conversión de dólares a yenes
test("One dollar should be 146.28 yens", function() {
    // Importar la función fromDollarToYen desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Llamar a la función con un valor de 1 dólar
    const yens = fromDollarToYen(1);

    // Calcular el valor esperado
    const expected = (1 / 1.07) * 156.5;

    // Verificar si el resultado es igual al valor esperado
    expect(fromDollarToYen(1)).toBe(expected);
});

// Prueba para verificar la conversión de yenes a libras
test("One Yen should be 0,005559 Pounds", function() {
    // Importar la función fromYenToPound desde app.js
    const { fromYenToPound } = require('./app.js');

    // Llamar a la función con un valor de 1 yen
    const yens = fromYenToPound(1);

    // Calcular el valor esperado
    const expected = (1 / 156.5) * 0.87;

    // Verificar si el resultado es igual al valor esperado
    expect(fromYenToPound(1)).toBe(expected);
});
