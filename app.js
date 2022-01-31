let id = 0;
function app() {
    const btnagregarFruta = document.getElementById('agregarFruta');
    btnagregarFruta.addEventListener('click', agregarElemento);

    getFruits()
}

function agregarElemento(e){
    e.preventDefault()
    let fruitName = document.getElementById('fruitName').value;
    let fruitPrice = document.getElementById('fruitPrice').value;
    id = id + 1;
    const fruta = {
        fruitName,
        fruitPrice,
        id
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
        let fruitId = frutas[i].id;
        
        fruitsView.innerHTML += `<div class="card">
            <div class=card-body>
                <div class="card-content">
                    <p>${fruitName} - price $ ${fruitPrice}</p>
                    <a class="btn_delete" onclick="sellFruit('${fruitId}')">Borrar Fruta</a>
                </div>
                <div class=card-img>
                    <img src="/imgs/${fruitName}.png" alt="">
                <div>
            <div>
        </div>`

    }
}

function sellFruit(fruitId){
    let frutas = JSON.parse(localStorage.getItem('FRUTAS'))
    for(let i = 0; i < frutas.length; i++){
        if(frutas[i].id == fruitId){
            frutas.splice(i, 1);
        }
    }
    localStorage.setItem('FRUTAS', JSON.stringify(frutas));
    getFruits()
}

app()
