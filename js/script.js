var numeroRandom = 0;
var vidas = 5;
var estaJugando = false;

var contenedorCorazones = document.querySelector(".contenedor-corazones");
var txtNumero = document.getElementById('txtNumero');
var lblNumero = document.getElementById('lblNumero');
var lblPista = document.getElementById('lblPista');

cargarCorazones();

function cargarCorazones() {
    vidas = 5;
    lblPista.innerHTML = "";
    txtNumero.value = "";
    contenedorCorazones.innerHTML = "";
    for (var i = 0; i < vidas; i++) {
        const div = document.createElement("div");
        div.innerHTML = `<img src="../../img/icon_corazon.png" alt="corazon" class="icon-corazon">`;
        contenedorCorazones.append(div);
    }
}

var numero = document.getElementById('txtNumero').value;
txtNumero.addEventListener('input', function (event) {
    const valor = event.target.value;
    const valorNumerico = valor.replace(/\D/g, '');
    event.target.value = valorNumerico;
});

const boton1 = document.querySelector(".btn1");
const boton2 = document.querySelector(".btn2");
const boton3 = document.querySelector(".btn3");
const btnAdivinar = document.querySelector(".adivinar");

boton1.addEventListener("click", function () {
    cargarCorazones();
    generarNumeroUnoDiez();
    estaJugando = true;
});

boton2.addEventListener("click", function () {
    cargarCorazones();
    generarNumeroUnoCiencuenta();
    estaJugando = true;
});

boton3.addEventListener("click", function () {
    cargarCorazones();
    generarNumeroUnoCien();
    estaJugando = true;
});

btnAdivinar.addEventListener("click", function () {
    if (!estaJugando) {
        alert("Seleccione un boton");
    } else {
        adivinarNumero();
    }
});

function generarNumeroUnoDiez() {
    numeroRandom = Math.floor(Math.random() * 10) + 1;
    lblNumero.innerHTML = "Ingresa un número del 1 al 10: ";
}

function generarNumeroUnoCiencuenta() {
    numeroRandom = Math.floor(Math.random() * 50) + 1;
    lblNumero.innerHTML = "Ingresa un número del 1 al 50: ";
}

function generarNumeroUnoCien() {
    numeroRandom = Math.floor(Math.random() * 100) + 1;
    lblNumero.innerHTML = "Ingresa un número del 1 al 100: ";
}

function adivinarNumero() {
    numero = txtNumero.value;

    if (numero == numeroRandom) {
        alert("Tu respuesta es correcta");
        lblNumero.innerHTML = "";
        lblPista.innerHTML = "";
        txtNumero.value = "";
        contenedorCorazones.innerHTML = "";
        estaJugando = false;
    } else {
        txtNumero.value = "";
        vidas -= 1;

        contenedorCorazones.innerHTML = "";
        for (var i = 0; i < vidas; i++) {
            const div = document.createElement("div");
            div.innerHTML = `<img src="../../img/icon_corazon.png" alt="corazon" class="icon-corazon">`;
            contenedorCorazones.append(div);
        }

        if (numero < numeroRandom) {
            lblPista.innerHTML = "Escribe un numero mayor";
        } else if (numero > numeroRandom) {
            lblPista.innerHTML = "Escribe un numero menor   ";
        }

        if (vidas == 0) {
            alert("Perdiste");
            lblNumero.innerHTML = "";
            lblPista.innerHTML = "";
            estaJugando = false;
        }
    }
}