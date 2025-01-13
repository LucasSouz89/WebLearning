let consoles = ['ps2', 'ps3', 'xbox', 'xbox 360','gameboy']
console.log(consoles);

//for
for(let i = 0; i < consoles.length; i++){
    console.log(`Console ${[i]} = ${consoles[i]}`);
    
}

//for in
for(const i in consoles){
    console.log(`Console ${consoles[i]}`);
}

// for of 
for(const i of consoles){
    console.log(`Consoles: ${i}`);
    
}

//forEach
consoles.forEach(indice =>{console.log(`Console com forEach ${indice}`);
})