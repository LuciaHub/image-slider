let diapositivas = document.querySelectorAll(".slide");
let body = document.querySelector("body");
let botonIzquierdo = document.getElementById("btnIzquierda")
let botonDerecho = document.getElementById("btnDerecha")

let numeroDiapositiva = 0;

establecerDiapositivaBody = function () {
    body.style.backgroundImage =
    diapositivas[numeroDiapositiva].style.backgroundImage
}

establecerDiapositivaActiva = function () {
    for (diapositiva of diapositivas) {
        diapositiva.classList.remove("active");
    }
    diapositivas[numeroDiapositiva].classList.add("active");
}

//Eventos
botonDerecho.addEventListener("click", () => {
    numeroDiapositiva++
    if (numeroDiapositiva >= diapositivas.length) {
        numeroDiapositiva = 0;
    }
    establecerDiapositivaActiva();
    establecerDiapositivaBody();
})

botonIzquierdo.addEventListener("click", () => {
    numeroDiapositiva--
    if (numeroDiapositiva < 0) {
        numeroDiapositiva = diapositivas.length - 1;
    }
        
    establecerDiapositivaActiva();
    establecerDiapositivaBody();
})

establecerDiapositivaBody();
establecerDiapositivaActiva();
