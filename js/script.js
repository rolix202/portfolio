let switcherBtn = document.getElementById('switcher_btn');
let colorWrapper = document.getElementById('color_wrapper');
let colorSwitcher = document.getElementById('color_switcher');
let closeBtn = document.getElementById('close_btn');
  
switcherBtn.addEventListener('click', function () {
    // colorWrapper.classList.toggle('active');
    colorWrapper.style.display = 'block';
    colorWrapper.style.left = '0px';
    colorSwitcher.style.left = '-60px';
})
closeBtn.addEventListener('click', function () {
    colorWrapper.style.left = '-190px';
    colorSwitcher.style.left = '0px';
})

let themeBtn = document.querySelectorAll('.theme_btn');

themeBtn.forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        // console.log(dataColor);
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    });
});

let mobileMenu = document.querySelector('.mobile_menu_bar');
let navs = document.getElementById('myMobile_menu');

function openNav() {
    navs.style.width = "100%";
}
function closeNav() {
    navs.style.width = "0";
}
mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("change");
    if (mobileMenu.classList.contains('change')) {
        // console.log('Yuppp');
        openNav();
    }
    else {
        closeNav();
    }
})

