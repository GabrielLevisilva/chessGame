function diagonais(vertical, horizontal, pecaClicada){
    const entrarCasaEvento = function(){ entrarCasa(event, pecaClicada, entrarCasaEvento)}

    console.log('diagonais')
    // MOVER PARA  DIAGONAL ESQUERDA CIMA 
    // loop que verifica se casaAndar == casasOcupadas[c]
    // true = não adiciona evento nem cor
    
    let letraLocal = letters.indexOf(vertical)

    for(let e = 1; e < letters.length; e++ ){
        
        let id = letters[letraLocal - e] + (horizontal + e)
        casaAndar = document.getElementById(id)

        if(casaAndar){
                    
            casaAndar.style.backgroundColor = 'blue'
            casaAndar.addEventListener('click', entrarCasaEvento)
        }
        else{
            console.log('essa casa não existe')
        }
    } 

    // DIAGONAL ESQUERDA BAIXO

    for(let e = 1; e < letters.length; e++ ){
        
        id = letters[letraLocal - e] + (horizontal - e)
        casaAndar = document.getElementById(id)

        if(casaAndar){
                    
            casaAndar.style.backgroundColor = 'blue'
            casaAndar.addEventListener('click', entrarCasaEvento)
        }
        else{
            console.log('essa casa não existe')
        }
}

for(let f = 1; f < letters.length; f++){
        
    id = letters[letraLocal + f] + (horizontal - f)
    casaAndar = document.getElementById(id)
        if(casaAndar){
                
            casaAndar.style.backgroundColor = 'blue'
            casaAndar.addEventListener('click', entrarCasaEvento)
        }
        else{
            console.log('essa casa não existe')
        }
}

for(let f = 1; f < letters.length; f++){
        
    id = letters[letraLocal + f] + (horizontal + f)
    casaAndar = document.getElementById(id)
        if(casaAndar){
                
            casaAndar.style.backgroundColor = 'blue'
            casaAndar.addEventListener('click', entrarCasaEvento)
        }
        else{
            console.log('essa casa não existe')
        }
}

}