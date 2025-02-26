const ligada = document.getElementById("ligar");
const desligada = document.getElementById("desligar");
const lamp = document.getElementById("lamp");
const container = document.getElementById("container");
const texto = document.getElementById("texto");

function moverLampada(x, y) {
    lamp.style.transform = `translate(${x}px, ${y}px)`;
}

function ligando(){
    lamp.src = './img/acesa.png';
    container.style.backgroundColor = "#fff"
    texto.innerText = "Apague a luz";
        texto.style.color = "#000"
    moverLampada(0, 0)
}

function apagando(){
    lamp.src = './img/lampada.png';
    container.style.backgroundColor = "#17131d"
    texto.innerText = "Ligue a luz";
    texto.style.color = "#fff"
    moverLampada(0, 30);
}

ligada.addEventListener('click', ligando);
desligada.addEventListener('click', apagando);