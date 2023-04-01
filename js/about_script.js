let progressBar = document.querySelectorAll(".progress_bar");
let valueContainer = document.querySelectorAll(".value_container");


for (let x = 0; x < 1; x++) {

    for (let i = 0; i < valueContainer.length; i++) {
        let progressValue = 0;
        let progressEndvalue = valueContainer[i].innerText;
        let speed = 50;

        let progress = setInterval(() => {
            progressValue++;

            valueContainer[i].textContent = `${progressValue}%`;

            // console.log(progressBar[i])
            
            progressBar[i].setAttribute('data-degree', progressValue)
            
            progressBar[i].style.background = `conic-gradient(
    #ffb400 ${progressValue * 3.6}deg,
    #252525 ${progressValue * 3.6}deg
   )`;
            if (progressValue == progressEndvalue) {
                clearInterval(progress);
            }
        }, speed);

    }
}

let my_menu_bar = document.getElementById('menu_bars');
let mobile_menu = document.getElementById('my_mobile_list');

function openNav(){
    mobile_menu.style.width = '100%';
}
function closeNav(){
    mobile_menu.style.width = '0';
}

my_menu_bar.addEventListener('click', function(){
    my_menu_bar.classList.toggle('change');
    
    if(my_menu_bar.classList.contains('change')){
        openNav();
    }
    else{
        closeNav();
    }
});

let colorSwitcher = document.getElementById('color_switcher_btn');
let colorPicker = document.getElementById('color_picker_btn');
let closeBtn = document.getElementById('close_btn');


colorSwitcher.addEventListener('click', function(){
    // alert('Hello Mr. Roland');

    colorPicker.style.left = '0px';
    colorSwitcher.style.left = '-150px';
})
closeBtn.addEventListener('click', function(){
    colorPicker.style.left = '-190px'
    colorSwitcher.style.left = '0px'
})

//let myColor = document.querySelectorAll('.color_btn');

// let myColor = document.getElementsByClassName('color_btn');

document.querySelectorAll('.color_btn').forEach(color => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        // console.log(dataColor);
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
        const yuup =  document.querySelector(':root').style.setProperty('--main-color', dataColor);

        document.querySelectorAll('.progress_bar').forEach(function (currentValue, currentIndex, listObj) {
            listObj[currentIndex].style = null

            var progressValue = listObj[currentIndex].dataset.degree

            listObj[currentIndex].style.background = `conic-gradient(
                var(--main-color) ${progressValue * 3.6}deg,
                #252525 ${progressValue * 3.6}deg
               )`;

        });
    })
    
});
// console.log(myColor[0]);
