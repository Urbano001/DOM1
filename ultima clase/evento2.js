/*console.log(1)
document.addEventListener('DOMcontentLoaded', () => {
    console.log(2);
});
console.log(3)*/
const nav = document.querySelector('.nave');

//vamos a registrar el EvenListener para el nav...

nav.addEventListener('dblclick', () => {
    console.log('Entrando en la barra de navegacion')
    
    nav.style.backgroundColor = 'Green';
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la barra de navegacion')

    nav.style.backgroundColor = 'red';
})

//mousedown // cuando presionas
//click // similer, de hecho es probablemente el mas utilizado
//dblclick // doble click al abrir un archivo
//mouseup // al soltar
//mouseout // mouse dentro de la zona
//mouseover // mouse fuera de la zona