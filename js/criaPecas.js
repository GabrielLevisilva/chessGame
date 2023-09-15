criaPecas()

function criaPecas(){
    const eventoCoordenadas = function(){coordenadas(event)};

// DAMA
const d1 = document.querySelector('#d1')
const damaD1 = document.createElement('div')
damaD1.setAttribute('class', 'dama')
d1.appendChild(damaD1)
damaD1.innerHTML = 'dama'
damaD1.addEventListener('click', eventoCoordenadas)


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

// BISPOS
const f1 = document.querySelector('#f1')
const bispoF1 = document.createElement('div')
bispoF1.setAttribute('class', 'bispo')
f1.appendChild(bispoF1)
bispoF1.innerHTML = 'bispo'
bispoF1.addEventListener('click', eventoCoordenadas)


const c1 = document.querySelector('#c1')
const bispoC1 = document.createElement('div')
bispoC1.setAttribute('class', 'bispo')
c1.appendChild(bispoC1)
bispoC1.innerHTML = 'bispo'
bispoC1.addEventListener('click', eventoCoordenadas)

}

