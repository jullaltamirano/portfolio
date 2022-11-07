let darkDiv = document.querySelectorAll('.dark_selector')
let darkMedia = document.querySelectorAll('.dark_media_selector')
let darkText = document.querySelectorAll('.dark_text_selector')
let darkMenu = document.querySelectorAll('.dark_menu_selector')
let darkGithub = document.querySelector('.dark_github')
let darkLinkedin = document.querySelector('.dark_linkedin')
let darkButtonImg = document.querySelector('.dark_light_img')
let button = document.querySelector('.dark_light')

button.addEventListener('click',() => {
    darkDiv.forEach(e => e.classList.toggle('dark'))
    darkText.forEach(e => e.classList.toggle('dark_text'))
    darkMedia.forEach(e => e.classList.toggle('dark_media'))
    darkMenu.forEach(e => e.classList.toggle('dark_menu'))
    darkGithub.classList.toggle('dark_img_github')
    darkLinkedin.classList.toggle('dark_img_linkedin')
    darkButtonImg.classList.toggle('dark_light_mode')

    if(darkGithub.classList.contains('dark_img_github')){
        darkGithub.setAttribute('src','./src/github_blanco.png')
    } else {
        darkGithub.setAttribute('src','./src/github.png')
    }

    if(darkLinkedin.classList.contains('dark_img_linkedin')){
        darkLinkedin.setAttribute('src','./src/linkedin_blanco.png')
    } else {
        darkLinkedin.setAttribute('src','./src/linkedin.png')
    }

    if(darkButtonImg.classList.contains('dark_light_mode')){
        darkButtonImg.setAttribute('src','./src/dia-y-noche_blanco.png')
    } else {
        darkButtonImg.setAttribute('src','./src/dia-y-noche.png')
    }
})