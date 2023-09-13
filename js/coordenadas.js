function addOcupada(){
    console.log('ADICIONOU A CLASSE OCUPADA')
    // Seleciona todas as divs com a classe "casa"
const casas = document.querySelectorAll('.casa');


// Itera sobre cada div com a classe "casa"
casas.forEach(casa => {
  // Verifica se a div "casa" contém uma div com a classe "torre"
  if (casa.querySelector('.torre')) {
    // Adiciona a classe "ocupada" à div "casa"
    casa.classList.add('ocupada');
    
  }
});


}

// Pegar as coordenadas da peça escolhida
function coordenadas(event){

    addOcupada()
    
    let pecaClicada = event.target
    console.log(pecaClicada)
    // Pega a casa em que a peça clicada está e o seu id
    let casaPai = pecaClicada.parentNode
    console.log(casaPai)
    let idCasaPai = casaPai.id
    // Pega os eixos vertical e horizontal
    let vertical = idCasaPai[0]
    console.log(vertical)
    let horizontal = Number(idCasaPai[1])
    console.log(horizontal)
    
    

    // Verificar qual é a peça. Se ela é um rei, bispo, peão, etc.
    if(pecaClicada.classList.contains('torre')){
        console.log("A peça é uma torre")
        frenteAtrásAndar(vertical, horizontal, pecaClicada)
    }
    else if(pecaClicada.classList.contains('rei')){
        console.log("A peça é um REI")
        
    }
    // TODO CRIAR OUTROS ELSE IF
}