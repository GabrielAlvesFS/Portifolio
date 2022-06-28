let hamburgerMenu = document.getElementsByClassName('menu-hidden')[0]
let nav = document.getElementsByClassName('nav-container')[0]
let navItem = document.querySelectorAll('.nav-item')


//Show and Hide the menu hamburger
hamburgerMenu.addEventListener('click', () => {
   if (nav.style.display == "flex") {
    nav.style.display = "none"
   } 
   else {
      nav.style.display = "flex"
   }
}) gi

//hide the menu when the item is clicked
navItem.forEach((item)=>{
    item.addEventListener('click', ()=>{
        nav.style.display = "none"
    })
})
