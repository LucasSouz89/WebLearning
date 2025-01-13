// Usando o console

console.log('Olá,eu sou o console');

//criando variaveis
let nomePersonagem = 'Kratos';
let nomeGame = 'God of War';
let forcaPersonagem = 100 ;

console.log(nomePersonagem);
console.log(nomeGame);
console.log(forcaPersonagem + 2);

forcaPersonagem = 150;
console.log(forcaPersonagem);


// declarando com var
var agilidadePersonagem = 98;
console.log(agilidadePersonagem);

//Criar constante
const dataNascimentoPersonagem = '01/01/2010'
console.log(dataNascimentoPersonagem);


//mostrar a vaiavel e seu tipo
console.log(nomePersonagem, typeof nomePersonagem);
console.log(nomeGame, typeof nomeGame);
console.log(forcaPersonagem, typeof forcaPersonagem)
console.log(dataNascimentoPersonagem, typeof dataNascimentoPersonagem);


// tamplate string - forma de criar uma string

let nomePersonagem2 = 'Arthur Morgan';
let nomeGame2 = 'Red Dead 2';
let lancamento = 2005;

console.log(nomeGame2, nomeGame2, lancamento);


//Usando tamplate
console.log(`Nome do Game: ${nomeGame2} - Data de lançamento: ${lancamento}`);

//Operadores aritiméticos

let primeiroValor = 50;
let SegundoValor = 10;

console.log(`Primeiro valor: ${primeiroValor} - Segundo Valor: ${SegundoValor}`);

// Adição
resultado = primeiroValor + SegundoValor;
console.log(`${primeiroValor} + ${SegundoValor} = ${resultado}`);

// Subtração
resultado2 = primeiroValor - SegundoValor;
console.log(`${primeiroValor} - ${SegundoValor} = ${resultado2}`);

//multiplicação
resultado3 = primeiroValor * SegundoValor;
console.log(`${primeiroValor} x ${SegundoValor} = ${resultado3}`);
// Divisão
resultado4 = primeiroValor / SegundoValor;
console.log(`${primeiroValor} / ${SegundoValor} = ${resultado4}`);

// Modulo
resultado5 = primeiroValor % SegundoValor;
console.log(`${primeiroValor} % ${SegundoValor} = ${resultado5}`);

// potencia
resultado6 = primeiroValor ** SegundoValor;
console.log(`${primeiroValor} elevado a ${SegundoValor} = ${resultado6}`);

//Operadores Relacionais


//maior
let terceiroValor = 20;
let quartoValor = 10;
let quintovalor = "20";


console.log(`${terceiroValor} > ${quartoValor} = ${terceiroValor > quartoValor}`);

//menor

console.log(`${terceiroValor} < ${quartoValor} = ${terceiroValor < quartoValor}`);

//maior igual

console.log(`${terceiroValor} >= ${quartoValor} = ${terceiroValor >= quartoValor}`);

// menor igual

console.log(`${terceiroValor} <= ${quartoValor} = ${terceiroValor <= quartoValor}`);

// igual

console.log(`${terceiroValor} = ${quartoValor} = ${terceiroValor == quartoValor}`);

//diferente
console.log(`${terceiroValor} != ${quartoValor} = ${terceiroValor != quartoValor}`);


//igualdade entre valor numero e string
console.log(`${terceiroValor} == ${quintovalor} = ${terceiroValor == quintovalor}`);
console.log(`${terceiroValor} === ${quintovalor} = ${terceiroValor === quintovalor}`);

// Operador logíco

let valor1 = 20;
let valor2 = 10;


// usando operador ||
console.log(`${valor1 !=valor2 || valor1 < valor2}`);
// usando &&
console.log(`${valor1 !=valor2 && valor1 < valor2}`);

// usando !
console.log(`${!((valor1 !=valor2 || valor1 < valor2))}`);
console.log(`${!((valor1 !=valor2) && (valor1 < valor2))}`);

// Operador de incremnto e atribuição
let velocidada =90;
let agilidade =50;

velocidada++;
agilidade--
console.log(`Velocidade: ${velocidada} Agilidade:${agilidade}`)
//somar 10 agilidade= agilidade+ 10 ou agilidade+=10
agilidade+=10;
console.log(`Velocidade: ${velocidada} Agilidade:${agilidade}`)

//sortear numeros
let numero1 = parseInt(Math.random()*100);
let numero2 = 50;

console.log(`${numero1} e ${numero2} `);


// Estrutura de decisão

let velocidade1 = parseInt(Math.random()*100);
let velocidade2 = parseInt(Math.random()*100);
console.log(`Velociade 1:${velocidade1} velocidade 2:${velocidade2}`);


if(velocidade1 > velocidade2){
    console.log(`Velocidade 1 é maior`);
}else if(velocidade1 < velocidade2){
    console.log(`Velocidade dois é maior`);
    
}else{
    console.log(`São iguais`);
    
};

// abrir porta
let porta = parseInt(Math.random()*6);
console.log(`${porta}`);

if(porta === 5){
    console.log(`Abrir porta`);
}
else{
    console.log(`Não abriu`);
    
};

//usando o swicth
switch (porta) {

    case 0:
        console.log(`0`);
    break;

    case 1:
        console.log(`0`);
    break;

    case 2:
        console.log(`0`);
    break;

    case 3:
        console.log(`3`);
    break;

    case 4:
        console.log(`4`);
    break;

    case 5:
        console.log(`5`);
    break;
}

//Estrutura de repetição
//for
let numerosorteado = 1;
for(let i=0; i<=10; i++){
    
    console.log(`Numero:${numerosorteado}`);
    numerosorteado++;
}
//sorteando 20 valores
let numerosorteado2 = parseInt(Math.random()*1000)
for(let b = 0; b<= 20; b++){

    console.log(`Numero sorteado:${numerosorteado2}`);
    
}

//estrutura while
let sortear = parseInt(Math.random()*100)
//Sortear numero de 0 a 100 até chegar em 99 e parar
while(sortear != 99 ){
    sortear = parseInt(Math.random()*100)
    
}
console.log(`Numero sorteado: ${sortear}`);
//fazer uma contagem de 0 a 10
let contagem = 0
while(contagem < 10){
    contagem++;
    console.log(`${contagem}`);
    
}
// Estrutura do/while
let k = -10;
do{
console.log(`Fazendo contagem do k`);
k++;
}while(k <=20){}