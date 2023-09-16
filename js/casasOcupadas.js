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