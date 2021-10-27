const buttonContainer = document.querySelector('.button-container');


function crearBotonNumeroDado(numero) {
    const nuevoBoton = document.createElement('button');
    nuevoBoton.textContent = `boton ${numero}`;
    nuevoBoton.classList.add('button');

    buttonContainer.appendChild(nuevoBoton);
}
//otra alternativa:
let nroBoton = 1;

function crearBoton() {
    const nuevoBoton = document.createElement('button');
    nuevoBoton.textContent = `boton ${nroBoton}`;
    nroBoton += 1
    nuevoBoton.classList.add('button');

    buttonContainer.appendChild(nuevoBoton);
}

//crear una cantidad de botones
function crearTantosBotones(cantidad) {
    for (let i = 1; i <= cantidad; i++) {
        crearBoton()
    }
}

//------------------------------------------------------------

function prenderApagarBoton(btn) {
    if (btn.classList.contains('active')) {
        btn.classList.remove('active')
    } else {
        btn.classList.add('active')
    }
}

function prenderBotonActualYApagarLosDemasBotones(evento) {
    evento.preventDefault()

    const buttons = [...buttonContainer.children];

    if (buttons.some(boton => boton.classList.contains('active'))) {

        const activeButton = buttons.find(boton => boton.classList.contains('active'))
        activeButton.classList.remove('active')
    }
    prenderApagarBoton(this)
}

function prenderApagarBotones() {
    //transformo el html collection en un array comun y corriente
    const buttons = [...buttonContainer.children];
    buttons.forEach(btn => {
        btn.addEventListener('click', prenderBotonActualYApagarLosDemasBotones);
    })
}

///////////////////////////////////////////////////////////////////////////
//concentro todas las llamadas de funcion en una sola:
function main() {
    crearTantosBotones(4);
    prenderApagarBotones();
}

main();
//--------------------


//////Manera menos eficiente de resolverlo/////////////////////////////////////////////////////////////////////
function prenderApagarCualquierBoton() {
    //transformo el html collection en un array comun y corriente
    const buttons = [...buttonContainer.children];
    buttons.forEach(btn => {
        btn.addEventListener('click', () => { prenderApagarBoton(btn) });
    })
}

function prenderBotonActualYApagarLosDemas(btn) {
    prenderApagarBoton(btn)
    const buttons = [...buttonContainer.children];
    let restoBotones = buttons.filter(boton => boton !== btn)
    console.log(restoBotones)
    restoBotones.forEach(boton => boton.classList.remove('active'))
}

function prenderApagarBotones1() {
    //transformo el html collection en un array comun y corriente
    const buttons = [...buttonContainer.children];
    buttons.forEach(btn => {
        btn.addEventListener('click', () => { prenderBotonActualYApagarLosDemasBotones(btn) });
    })

}