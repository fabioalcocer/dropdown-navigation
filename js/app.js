const body = document.querySelector('body')
const logo = document.querySelector('.header__logo')
const menuToggle = document.querySelector('.header__btns')
const navigation = document.querySelector('.navigation')
const main = document.querySelector('.main')
const featureBtn = document.querySelector('.expanded-btn')
const featureExpanded = document.querySelector('.expanded')
const companyBtn = document.querySelector('.expanded-btn.company')
const companyExpanded = document.querySelector('.expanded.company')

logo.addEventListener('click', () => {
  body.classList.toggle('dark')
})


menuToggle.onclick = () => {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}


featureBtn.addEventListener('click', () => {
  featureExpanded.classList.toggle('d-none')
})

companyBtn.addEventListener('click', () => {
  companyExpanded.classList.toggle('d-none')
})