const damaMoves = (vertical, horizontal, pecaClicada) => {
    const entrarCasaEvento = function(){ entrarCasa(event, pecaClicada, entrarCasaEvento)}

    let casasOcupadas =  document.querySelectorAll(".ocupada")
   

    // MOVER PARA FRENTE
    
    let andarFrente = 8 - horizontal //quantidade de casa livre para andar na frente
    for(let c = 1; c <= andarFrente; c++){

        let id = vertical + (horizontal + c)
        let casaAndar = document.getElementById(id)

            if(casaAndar){
                
                casaAndar.style.backgroundColor = 'blue'
                casaAndar.addEventListener('click', entrarCasaEvento)
            }
            else{
                console.log('essa casa não existe')
            }
    }

    // MOVER PARA TRÁS

    for(let d = (horizontal - 1); d > 0; d--){
        
        id = vertical + (horizontal - d)
        casaAndar = document.getElementById(id)
    
                if(casaAndar){
                    
                    casaAndar.style.backgroundColor = 'blue'
                    casaAndar.addEventListener('click', entrarCasaEvento)
                }
                else{
                    console.log('essa casa não existe')
                }

            
    }

    // MOVER PARA ESQUERDA
    // loop que verifica se casaAndar == casasOcupadas[c]
    // true = não adiciona evento nem cor
    
    let letraLocal = letters.indexOf(vertical)

    for(let e = 1; e < letters.length; e++ ){
        
        id = letters[letraLocal - e] + horizontal
        casaAndar = document.getElementById(id)

        if(casaAndar){
                    
            casaAndar.style.backgroundColor = 'blue'
            casaAndar.addEventListener('click', entrarCasaEvento)
        }
        else{
            console.log('essa casa não existe')
        }


        // for(let rep = 0; rep < casasOcupadas.length; rep++){
        //     if(casaAndar == casasOcupadas[rep]){
        //         break;
        //     }
        //     else{
        //         if(casaAndar){
                    
        //             casaAndar.style.backgroundColor = 'blue'
        //             casaAndar.addEventListener('click', entrarCasaEvento)
        //         }
        //         else{
        //             console.log('essa casa não existe')
        //         }

        //     }
        // }
            
    }

    // MOVER PARA A DIREITA
    console.log('letraLocal = ' + letraLocal)

    for(let f = 1; f < letters.length; f++){
        
        id = letters[letraLocal + f] + horizontal
        casaAndar = document.getElementById(id)
            if(casaAndar){
                    
                casaAndar.style.backgroundColor = 'blue'
                casaAndar.addEventListener('click', entrarCasaEvento)
            }
            else{
                console.log('essa casa não existe')
            }
    }

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
};