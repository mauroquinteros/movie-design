const mediaQuerie = window.matchMedia('screen and (max-width: 790px)')
const burgerButton = document.querySelector('#burger-button')
const menuOption = document.querySelector('#menu-option')

mediaQuerie.addListener(validation)

function validation(event) {
  console.log(event)
  if(event.matches) {
    burgerButton.addEventListener('click', hideShow)
  } else {
    burgerButton.removeEventListener('click', hideShow)
  }
}

validation(mediaQuerie)

function hideShow(){
  if(menuOption.classList.contains('active')) {
    menuOption.classList.remove('active')
  } else {
    menuOption.classList.add('active')
  }
}