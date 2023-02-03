/** propiedades añadidas a travez de una libreria */
const typed = new Typed('.tipeo', {
stringsElement: '#cadenaTexto',
typeSpeed: 75,
startDelay: 300,
backSpeed: 75,
smartBackspace: true,
shuffle: false,
backDelay: 1500,
loop: true,
loopCount: false,
showCursor: true,
cursorChar: '.',
contentType: 'html'
});

/**boton click izquierdo */

document.getElementById('click1').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
)

document.getElementById('click2').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}
)
console.log('Documento desarrollado por Gimenez Franco')

//Documento desarrollado por Gimenez Franco