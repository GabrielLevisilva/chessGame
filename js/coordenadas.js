
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
    if(pecaClicada.classList.contains('bispo')){
      console.log("A peça é um BISPO")
      diagonais(vertical, horizontal, pecaClicada)
  }
    else if(pecaClicada.classList.contains('dama')){
        console.log("A peça é uma DAMA")
        damaMoves(vertical, horizontal, pecaClicada)
        
        
    }
    // TODO CRIAR OUTROS ELSE IF
}

