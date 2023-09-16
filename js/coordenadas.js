function addOcupada() {
  console.log('ADICIONOU A CLASSE OCUPADA');
  
  // Seleciona todas as divs com a classe "casa"
  const casas = document.querySelectorAll('.casa');
  const casasOcupadas = [];

  // Itera sobre cada div com a classe "casa"
  for (let i = 0; i < casas.length; i++) {
    const casa = casas[i];
    
    // Verifica se a div "casa" contém uma div com a classe "torre", "bispo" ou "dama"
    if (casa.querySelector('.torre') || casa.querySelector('.bispo') || casa.querySelector('.dama')) {
      // Adiciona a classe "ocupada" à div "casa"
      casa.classList.add('ocupada');
      casasOcupadas.push(casa.id);
    }
  }

  console.log(casasOcupadas + ' Casas');
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

