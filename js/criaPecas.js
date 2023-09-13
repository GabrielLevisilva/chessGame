criaPecas()

function criaPecas(){
    const eventoCoordenadas = function(){coordenadas(event)};
    // TORRES
// cria a torre que fica inicialmente na casa h1
const h1 = document.querySelector('#h1')
const torreH1 = document.createElement('div')
torreH1.setAttribute('class', 'torre')
h1.appendChild(torreH1)
torreH1.innerHTML = 'torre'
torreH1.addEventListener('click', eventoCoordenadas)


// cria a torre que fica inicialmente na casa a1
const a1 = document.querySelector('#a1')
const torreA1 = document.createElement('div')
torreA1.setAttribute('class', 'torre')
a1.appendChild(torreA1)
torreA1.innerHTML = 'torre'
torreA1.addEventListener('click', eventoCoordenadas)

}