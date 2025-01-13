// manipulação dom 

// pegando pelo ID 
let getId1 = document.getElementById('heroi-um')
console. log(getId1)

//pegando pela class e id
let getId2 = document.querySelector('#heroi-um')
console. log(getId2)

//pegando pela class
let getclass3 = document.getElementsByClassName('heroi')
console. log(getclass3)

//pegando todas as classes e id
let getclass2 = document.querySelectorAll('.nome')
console.log(getclass2)

//manipluando a classe
console.log(getclass2[2].textContent);
getclass2[2].textContent = 'Batman';
console.log(getclass2[2].textContent);

//pegando pela tag
let getTag1 = document.getElementsByTagName('td');
console.log(getTag1);

//buscando a tah pelo query selection
let gettag2 = document.querySelectorAll('td')
console.log(gettag2)