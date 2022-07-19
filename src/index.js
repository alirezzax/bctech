// responsive header navbar
const toggleBtn = document.querySelector('.navbar-toggle-btn')
const navbar = document.querySelector('.site-header__navbar')

toggleBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('close')
    navbar.classList.toggle('open')
})