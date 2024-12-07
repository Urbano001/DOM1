document.getElementById("demo").innerHTML = "LLego navidad"
//let elemento;

//elemento = document
//elemento = document.all;
//elemento = document.all[0];
//elemento = document.head;
//elemento = document.body;

//console.log(elemento);

const header = document.getElementsByClassName('header');
console.log(header);

const formulario = document.getElementsByClassName('formulario');
console.log(formulario)

const curso = document.querySelector('.curso');
console.log(curso)
console.log(curso.innerHTML);
console.log(curso.textContent);
console.log(curso.innerText);
const descrip = document.querySelector('#descripcion');
    console.log(descrip)

const nuevoTexto = 'javascripts Avanzado';
document.querySelector('.curso').textContent = nuevoTexto;

//const nuevoTitulo = 'Viendo DOM por primera vez';
//document.querySelector('.titulo').innerHTML = nuevoTitulo;

const imagen = document.getElementById('foto-1').src = "image/descargaa.jpg"; 
console.log(imagen);

const nuevoTitulo = document.querySelector('.titulo');
nuevoTitulo.style.color= 'blue';
//voTitulo.style.backgroundColor = 'black'
nuevoTitulo.style.textTransform = 'uppercase';
nuevoTitulo.style.fontsize = '30px'

const desc = document.querySelector('.descripcion');
console.log(desc.classList);

desc.classList.add('bgblue');