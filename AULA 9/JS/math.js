const numero = 88.89;
console.log(`Número: ${numero}`);

// math.ceil ->89 arredonda pro proximo
console.log(`Número retornado: ${Math.ceil(numero)}`);

// math.floor ->88 arredonda pro anterior
console.log(`Número retornado: ${Math.floor(numero)}`);

// Math.round numero 1 88 nuemro 2 89
const numero1 = 88.25;
const numero2 = 88.65;

console.log(`Número retornado: ${Math.round(numero1)}`);
console.log(`Número retornado: ${Math.round(numero2)}`);

// Math.max 965
console.log((`Lista de numeros: 23,12,965, 56, 78`));
console.log((`Maior numero: ${Math.max(23,12,965, 56, 78)}`));

// Math.min 12
console.log((`Lista de numeros: 23,12,965, 56, 78`));
console.log((`Menor  numero: ${Math.min(23,12,965, 56, 78)}`));

// Math.pow elevar a portencia
console.log(`${Math.pow(2,10)}`);
console.log(`${2**10}`);


// Math.sqrt() raiz quadrada

console.log(`Raiz quadrada de 81:${Math.sqrt(81)}`);

// Math.cbrt Raiz cubica
console.log(`Raiz cubica de 27:${Math.cbrt(27)}`);