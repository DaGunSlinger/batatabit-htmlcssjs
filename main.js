const row_right = document.querySelector('.row-right')
const row_left = document.querySelector('.row-left')

const left_table = document.querySelector('.main-currency-table-left')
const right_table = document.querySelector('.inactive')

row_right.addEventListener('click', toggleTable)
row_left.addEventListener('click', toggleTable)

function toggleTable(){
    left_table.classList.toggle('inactive')
    right_table.classList.toggle('inactive')
}

// const menuEmail = document.querySelector('.navbar-email')
// const desktopMenu = document.querySelector('.desktop-menu')
// const burguerMenu = document.querySelector('.menu')
// const mobileMenu = document.querySelector('.mobile-menu')

// menuEmail.addEventListener('click', toggleDesktopMenu)
// burguerMenu.addEventListener('click', toggleMobileMenu)

// function toggleDesktopMenu(){
//     desktopMenu.classList.toggle('inactive')
// }

// function toggleMobileMenu(){
//     mobileMenu.classList.toggle('inactive')
// }