let posicionInicial = window.pageYOffset
let $nav = document.getElementById('nav')
let $hamb_menu = document.querySelector('.menu_container')
let $menu_click1 = document.querySelector('.menu_link1')
let $menu_click2 = document.querySelector('.menu_link2')
let $menu_click3 = document.querySelector('.menu_link3')
let $menu_click4 = document.querySelector('.menu_link4')
let $bar_1 = document.querySelector('.bar1')
let $bar_2 = document.querySelector('.bar2')
let $bar_3 = document.querySelector('.bar3')

let bars1 = []
bars1.push($bar_1,$bar_2,$bar_3)

let links = []
links.push($menu_click1, $menu_click2, $menu_click3, $menu_click4)


window.addEventListener('scroll', () => {
    let posicionActual = window.pageYOffset

    if($nav.style.top === '-3.75em'){
        bars1.forEach(e => {e.classList.remove('animado')})
    }

    if(posicionInicial >= posicionActual){
        $nav.style.top = '0em'
        
    } else {
        $nav.style.top = '-3.75em'
        $hamb_menu.style.top = '-213px'        
    }

    posicionInicial = posicionActual
})

links.forEach(e => e.addEventListener('click',() => {
    bars1.forEach(e => {e.classList.toggle('animado')})
    $nav.style.top = '-3.75em'
    $hamb_menu.style.top = '-213px'
}))
