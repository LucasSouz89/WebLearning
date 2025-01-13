//calcular xp
let btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener('click', CalcularXp)

function CalcularXp(){
    let herois = document.querySelectorAll(".heroi");
    console.log(herois);

    for(let i=0; i<herois.length; i++){
        
        //Mostra os atributos em lista
        let tdVelocidade = herois[i].querySelector(".velocidade").textContent;
        let tdforca = herois[i].querySelector(".forca").textContent;
        let tdagilidade = herois[i].querySelector(".agilidade").textContent;
        console.log(tdVelocidade);
        console.log(tdforca);
        console.log(tdagilidade);
        //calcular xp
        let xp = (Number(tdVelocidade))+(Number(tdforca))+(Number(tdagilidade));
        console.log(xp);
        //mostrar xp final
        herois[i].querySelector(".xp-final").textContent = xp;
        console.log(xp);
        // se o xp for menor que 250 ira aparecer o botão amarelo
        herois[i].classList.add("bg-warning")
    }
    
}