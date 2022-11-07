let $ham_menu = document.querySelector('.menu_container')
let $ham_button = document.querySelector('.ham_button')
let $bar1 = document.querySelector('.bar1')
let $bar2 = document.querySelector('.bar2')
let $bar3 = document.querySelector('.bar3')

let bars = []
bars.push($bar1,$bar2,$bar3)

$ham_button.addEventListener('click', () => {
    bars.forEach(e => {e.classList.toggle('animado')})

    if($ham_menu.style.top === '-213px'){
        return $ham_menu.style.top = '60px'
    }     
    if($ham_menu.style.top === '60px'){
        return $ham_menu.style.top = '-213px'
    }
})
