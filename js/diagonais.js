function diagonais(vertical, horizontal, pecaClicada){
    const entrarCasaEvento = function(){ entrarCasa(event, pecaClicada, entrarCasaEvento)}

    
    // MOVER PARA  DIAGONAL ESQUERDA CIMA 
    // loop que verifica se casaAndar == casasOcupadas[c]
    // true = não adiciona evento nem cor
    
    let casasOcupadas = document.querySelectorAll('.ocupada')
    
    let letraLocal = letters.indexOf(vertical)
    let encerrarLoop = false

    for(let e = 1; e < letters.length; e++ ){
        
        let id = letters[letraLocal - e] + (horizontal + e)
        casaAndar = document.getElementById(id)
        let casaOcupada = false

        if(casaAndar){
            for(let w = 0; w < casasOcupadas.length; w++){
               if(casaAndar == casasOcupadas[w]){
                   encerrarLoop = true
                   casaOcupada = true
                   break;
               }
           }

           if(!casaOcupada){
               casaAndar.style.backgroundColor = 'blue';
               casaAndar.addEventListener('click', entrarCasaEvento);
           }


           if(encerrarLoop){
               break;
           }
            
       }
       else{

       }
    } 

    // DIAGONAL ESQUERDA BAIXO

    encerrarLoop = false

    for(let e = 1; e < letters.length; e++ ){
        
        id = letters[letraLocal - e] + (horizontal - e)
        casaAndar = document.getElementById(id)

        let casaOcupada = false

        if(casaAndar){
            for(let w = 0; w < casasOcupadas.length; w++){
               if(casaAndar == casasOcupadas[w]){
                   encerrarLoop = true
                   casaOcupada = true
                   break;
               }
           }

           if(!casaOcupada){
               casaAndar.style.backgroundColor = 'blue';
               casaAndar.addEventListener('click', entrarCasaEvento);
           }


           if(encerrarLoop){
               break;
           }
            
       }
       else{

       }
}
// ----
encerrarLoop = false

for(let f = 1; f < letters.length; f++){
        
    id = letters[letraLocal + f] + (horizontal - f)
    casaAndar = document.getElementById(id)
    let casaOcupada = false

    if(casaAndar){
        for(let w = 0; w < casasOcupadas.length; w++){
           if(casaAndar == casasOcupadas[w]){
               encerrarLoop = true
               casaOcupada = true
               break;
           }
       }

       if(!casaOcupada){
           casaAndar.style.backgroundColor = 'blue';
           casaAndar.addEventListener('click', entrarCasaEvento);
       }


       if(encerrarLoop){
           break;
       }
        
   }
   else{

   }
}
// ---
encerrarLoop = false

for(let f = 1; f < letters.length; f++){
        
    id = letters[letraLocal + f] + (horizontal + f)
    casaAndar = document.getElementById(id)
    let casaOcupada = false

    if(casaAndar){
        for(let w = 0; w < casasOcupadas.length; w++){
           if(casaAndar == casasOcupadas[w]){
               encerrarLoop = true
               casaOcupada = true
               break;
           }
       }

       if(!casaOcupada){
           casaAndar.style.backgroundColor = 'blue';
           casaAndar.addEventListener('click', entrarCasaEvento);
       }


       if(encerrarLoop){
           break;
       }
        
   }
   else{

   }
}

}