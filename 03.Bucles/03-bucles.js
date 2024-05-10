//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
function encuentraX(x) {
    return `El numero X es: ${x}`;
}


// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
function sumandoTodo(num) {
    let suma = 0;
    for (let i = 0; i <= num; i++) {
        suma += i;
    }
    return suma;
}


// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
function BinarioADecimal(num) {
    return parseInt(num, 2);
}


//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
function esPrimo(numero) {
    if (numero <= 1) return `${numero} no es primo.`;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return `${numero} no es primo.`;
    }
    return `${numero} es primo.`;
}

//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
function invertirCadena(cadena) {
    let resultado = '';
    for (let i = cadena.length - 1; i >= 0; i--) resultado += cadena[i];
    return resultado;
}


// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
function cantidadDeVocales(phrase) {
    let count = 0;
    for (let char of phrase.toLowerCase()) {
        if ('aeiou'.includes(char)) count++;
    }
    return count;
}

// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇
function primerDivisible(divisor, dividendo) {
    let num = dividendo;
    while (num % divisor !== 0) {
        num++;
    }
    return num;
}

 
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}