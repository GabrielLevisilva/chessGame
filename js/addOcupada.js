function addOcupada(){
    console.log('ADICIONOU A CLASSE OCUPADA')
    // Seleciona todas as divs com a classe "casa"
const casas = document.querySelectorAll('.casa');

for(let c = 0; c < casas.length; c++){
    if(casa[c].querySelector('.torre')){
        casa.classList.add('ocupada');
    }
}

}

addOcupada()