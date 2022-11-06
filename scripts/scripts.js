let darkDiv = document.querySelectorAll('.dark_selector')
let darkText = document.querySelectorAll('.dark_text_selector')
let button = document.querySelector('.dark_light')

button.addEventListener('click',() => {
    darkDiv.forEach(e => e.classList.toggle('dark'))
    darkText.forEach(e => e.classList.toggle('dark_text'))
})