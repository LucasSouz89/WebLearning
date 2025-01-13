let consoles = ['Ps2','PS3','XBOX360','Wii','xboxone']
console.log(consoles);

// indice
console.log(`Array 1: ${consoles[0]}`);
console.log(`Array 2: ${consoles[1]}`);

//legth
console.log(`Array quantidade: ${consoles.length}`);

//unshift adiciona no começo do array
consoles.unshift('PC')
console.log(consoles);

//shift retira o primeiro elemento do array
consoles.shift()
console.log(consoles);


// push() adiona uma elemento no array como ultimo
consoles.push('PS5')
console.log(consoles);
 
// pop() retira o ultimo elemnto do array
consoles.pop();
console.log(consoles);

// splice()- exlui certo elemento
consoles.splice(1,1);
console.log(consoles);

// splice()- adiciona certo elemento certo elemento
consoles.splice(0,1, 'Swicth' );
console.log(consoles);

//slice() -corta o array
const copiaConsoles = consoles.slice(1,3)
console.log(copiaConsoles);

//concat() - juntar arrays
let games =['Gow', 'COD', 'RDR2']
console.log(games);
let tudo =consoles.concat(games);
console.log(tudo)

//reverse() -inverter o array
console.log(consoles.reverse())
