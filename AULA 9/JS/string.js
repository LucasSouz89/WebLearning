let string = 'Javascript é uma linguagem';
console.log(string);


// length
console.log(`Quantidade de caracteres:${string.length}`);

// toUpperCase()
console.log(`transformar em letra maiuscula:${string.toUpperCase()}`);

// toLowerCase()
console.log(`transformar em letra maiuscula:${string.toLowerCase()}`);

// charAt()
console.log(string);
console.log(`Conteudo do índice 3 = ${string.charAt(3)}`);
console.log(`Conteudo do índice 13 = ${string[13]}`);

// indexOf()
console.log(`Procurando pela letra g: ${string.indexOf('g')}`);
console.log(`Procurando pela letra g: ${string.indexOf('x')}`);

// substring() 
console.log(`Mostra do conteudo 4 ao 20${string.substring(4,20)}`)
