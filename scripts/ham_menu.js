let $ham_menu = document.querySelector('.menu_container')
let $ham_button = document.querySelector('.ham_button')

$ham_button.addEventListener('click', () => {
    if($ham_menu.style.top === '-213px'){
        return $ham_menu.style.top = '60px'
    }     
    if($ham_menu.style.top === '60px'){
        return $ham_menu.style.top = '-213px'
    }
})

console.log($ham_menu)
console.log($ham_button)
