let numeroSecreto = 0;
let numeroIntentos = 0;
let numerosSorteados = [];
console.log(numeroSecreto);
let numeroMaximo = 10;

// Código agrega texto según etiqueta
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento':'intentos'}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        }else { 
            asignarTextoElemento('p', 'El número es mayor');
        }
        numeroIntentos++;
        limpiarInput();
    }
    return numeroDeUsuario;
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si ya sorteamos todos los números
    if (numerosSorteados == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números')
    } else {

    }

    // Si el número generado está en la lista
    if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numerosSorteados.push(numerosSorteados);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarInput();
    // Resetear a las condiciones iniciales
    condicionesIniciales();
    // Desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    // Inicializar el número de intentos
};

// Esperar por el enter para no usar el botón
document.addEventListener('DOMContentLoaded', function() {
    // Agregar el evento de keydown
    document.getElementById('valorUsuario').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            verificarIntento();
        }
    });
    condicionesIniciales();
});

condicionesIniciales();
