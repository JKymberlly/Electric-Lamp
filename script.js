const ligada = document.getElementById("ligar");
const desligada = document.getElementById("desligar");
const lamp = document.getElementById("lamp");
const container = document.getElementById("container");
const texto = document.getElementById("texto");

function ligando(){
    lamp.src = './acesa.png';
    container.style.backgroundColor = "#fff"
    texto.innerText = "Apague a luz";
}

function apagando(){
    lamp.src = './apagada.png';
    container.style.backgroundColor = "#17131d"
    texto.innerText = "Ligue a luz";
}

ligada.addEventListener('click', ligando);
desligada.addEventListener('click', apagando);