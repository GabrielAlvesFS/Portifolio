let hamburgerMenu = document.querySelector('.menu-hidden')
let navItem = document.querySelectorAll('.nav-item')

//Show and Hide the menu hamburger
hamburgerMenu.addEventListener('click', ()=> {
    navItem.forEach( (item) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        }
        else {
            item.classList.add('active')
        }
    })
})

//hide menu when any item is clicked
navItem.forEach( (item) => {
    item.addEventListener('click', () => {
        navItem.forEach( (allItems) => { 
            allItems.classList.remove('active')
        })
    })
})
