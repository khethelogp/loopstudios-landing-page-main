// hamburger
const hamburger = document.querySelector('.header .navbar .nav-links .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-links ul');
const menu_item = document.querySelectorAll('.header .navbar .nav-links a');
const header = document.querySelector('.header.container');

//hamburger function

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) =>{
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});
