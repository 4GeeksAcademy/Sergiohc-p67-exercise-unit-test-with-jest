// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función para convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Convertir dólares a euros
    let valueInEuro = valueInDollar / 1.07;
    // Convertir euros a yenes
    let valueInYen = valueInEuro * 156.5;
    // Retornar el valor en yenes
    return valueInYen;
}

// Declaramos una función para convertir de yenes a libras
const fromYenToPound = function(valueInYens) {
    // Convertir Yenes a euros
    let valueInEuro = valueInYens / 156.5;
    // Convertir euros a Libras
    let valueInPounds = valueInEuro * 0.87;
    // Retornar el valor en Libras
    return valueInPounds;
}

// Exportamos todas las funciones para usarlas en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
