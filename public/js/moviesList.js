console.log('moviesList.js connected success')
const body=document.querySelector('body')
const h1=document.querySelector('.moviesListTitulo')

const response=confirm('queres cambiar el modo oscuro?')
if(response){
    body.style.backgroundColor='#7f7f7f'
    body.classList.add('fondoMoviesList')
}
h1.innerHTML='listado de peliculas'