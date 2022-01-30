
function app() {
    const btnagregarFruta = document.getElementById('agregarFruta');
    btnagregarFruta.addEventListener('click', agregarElemento);
}

function agregarElemento(e){
    e.preventDefault()
    let fruitName = document.getElementById('fruitName').value;
    let fruitPrice = document.getElementById('fruitPrice').value;
    
    const fruta = {
        fruitName,
        fruitPrice
    };
    saveFruit(fruta)
}


function saveFruit(fruta) {
    if (localStorage.getItem('FRUTAS') === null){
        let frutas = [];
        frutas.push(fruta)
        localStorage.setItem('FRUTAS', JSON.stringify(frutas));
    }
    else{
        let frutas = JSON.parse(localStorage.getItem('FRUTAS'))
        frutas.push(fruta);
        localStorage.setItem('FRUTAS', JSON.stringify(frutas))
    }

    getFruits()
}

function getFruits(){
    let frutas = JSON.parse(localStorage.getItem('FRUTAS'))
    let fruitsView = document.getElementById('fruitsView')

    fruitsView.innerHTML = '';

    for(let i = 0; i < frutas.length; i++){
        let fruitName = frutas[i].fruitName;
        let fruitPrice = frutas[i].fruitPrice;
        
        fruitsView.innerHTML += `<div class="card">
            <div class=card-body>
                <div class="card-content">
                    <p>${fruitName} - price $ ${fruitPrice}</p>
                    <a class="btn_delete">Borrar Fruta</a>
                </div>
                <div class=card-img>
                    <img src="/imgs/${fruitName}.png" alt="">
                <div>
            <div>
        </div>`

    }
}

app()
getFruits()