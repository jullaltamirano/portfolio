let posicionInicial = window.pageYOffset
let $nav = document.getElementById('nav')
let $hamb_menu = document.querySelector('.menu_container')

window.addEventListener('scroll', () => {
    let posicionActual = window.pageYOffset

    if(posicionInicial >= posicionActual){
        $nav.style.top = '0em'
    } else {
        $nav.style.top = '-3.75em'
        $hamb_menu.style.top = '-213px'
    }

    posicionInicial = posicionActual
})